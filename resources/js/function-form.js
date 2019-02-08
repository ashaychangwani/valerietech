var slideIndex = 1;
var count=0;
var timeOut;
showSlides(slideIndex);



function plusSlides(n) {
    clearTimeout(timeOut);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timeOut);
  showSlides(slideIndex = n);
}


function showSlides(n) {
      var i;
      count++;
      var slides = document.getElementsByClassName("banners");
      var htext = document.getElementsByClassName("hero-text");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
          htext[i].style.display="none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      htext[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
       timeOut=setTimeout(plusSlides,5000,1);   
}
$(document).ready(function(){
   
    
    /*Start of app.js*/
    var width, k, name, email, priority1, priority2, priority3, game1, game2, game3, software1, software2, software3, otherPriority, otherGame, otherSoftware, buttonPressed,priceRange;
    
	

    document.querySelector('.p1').style.visibility = '';
    document.querySelector('.p2').style.display = 'none';
    document.querySelector('.p3').style.display = 'none';
    document.querySelector('.p4').style.display = 'none';
	document.getElementById('game-label').style.display = 'none';
    document.getElementsByName("gameLabel")[0].style.display="none"; 
    document.querySelector('.otherGame').style.display = "none";
    document.getElementsByName("softwareLabel")[0].style.display = "none";
    document.querySelector('.otherSoftware').style.display = "none";

     
    var test=document.getElementsByName("back")[0].style.display="none";
    width = 25;
    k = 1;
     
	$('.submitButton').click(function(){buttonPressed = $(this).attr('name');});
     
    $(".main-form").submit(function(event){
        if(k!=4){
        event.preventDefault();
        }
        if(k==1 && !document.getElementById("phone").value.match(/^\d{10}$/))
            {
                alert("Please enter a valid phone number");
                return;
            }
        if( k==2 && (priority1 == null || priority2 == null || priority3 == null) && buttonPressed === "next")
        {
            alert("Please enter your priorities");
            return;
        }
        if(buttonPressed === "next"){
        
        if(k == 1){
			p1();
		}
        document.querySelector('.p' + k).style.display = 'none';
        k = k+1;
        document.querySelector('.p' + k).style.display = 'block';
            
        if(k > 1){var test=document.getElementsByName("back")[0].style.display="block";}
		if(k == 2){
			document.getElementById("fifty").checked = true;
		}
        if(k == 3){
            p3();
            document. getElementsByName('next')[0].value = 'Submit';
			document.getElementById("seventyfive").checked = true;
        }
        if(k == 4){
			p4();
			document.getElementsByName('next')[0].value = 'Home';
			document.getElementById("onehundred").checked = true;
		}          
        }
        else if(buttonPressed === "back"){
            
        if(k > 1){
			document.querySelector('.p' + k).style.display = 'none';
            k = k-1;
            document.querySelector('.p' + k).style.display = 'block';
        }
        if(k > 1){document.getElementsByName("back")[0].style.display="block";}
		
        else{document.getElementsByName("back")[0].style.display="none";}
		
        if(k <= 3){
            document.getElementsByName('next')[0].value = 'Next';
            document.getElementsByName('next')[0].style.display = "block";
        }
        if(k == 1){
			p1();
			document.getElementById('twentyfive').checked = true;
		}
		if(k == 2){
			document.getElementById("fifty").checked = true;
		}
        if(k == 3){
			p3();
			document.getElementById("seventyfive").checked = true;
		}
        //progressBarWidth(k);
        }
    });

	var p1 = function(){
		name = document.getElementById('name').value;
		email = document.getElementById('email').value;
	};
     
	document.querySelector('.priority1').addEventListener('change', function(){priority1 = document.querySelector('.priority1').selectedIndex;});
		
	document.querySelector('.priority2').addEventListener('change', function(){priority2 = document.querySelector('.priority2').selectedIndex;});
		
	document.querySelector('.priority3').addEventListener('change', function(){
        priority3 = document.querySelector('.priority3').selectedIndex;});
    var p3 = function(){
        
        priceRange=$("#amount").val();
        if(priority1 === 2 || priority2 === 2 || priority3 === 2){
            document.getElementById("game-label").style.display="block";
            document.querySelector(".games1").style.display = "block";
            document.querySelector(".games2").style.display = "block";
            document.querySelector(".games3").style.display = "block";
			document.getElementById('game-label').style.display = 'block';
            
            document.querySelector('.games1').addEventListener('change', function(){
                game1 = document.querySelector('.games1').selectedIndex;
				check(game1, 'otherGame', 'gameLabel', 18, game1, game2, game3);
            });

            document.querySelector('.games2').addEventListener('change', function(){
                game2 = document.querySelector('.games2').selectedIndex;
                check(game2, 'otherGame', 'gameLabel', 18, game1, game2, game3);
            });

            document.querySelector('.games3').addEventListener('change', function(){
                game3 = document.querySelector('.games3').selectedIndex;
                check(game3, 'otherGame', 'gameLabel', 18, game1, game2, game3);
            });
        }else{
            document.querySelector(".games1").style.display = "none";
            document.querySelector(".games2").style.display = "none";
            document.querySelector(".games3").style.display = "none";
            document.querySelector(".otherGame").style.display = "none";
            document.getElementsByName("gameLabel")[0].style.display = "none";
			document.getElementById('game-label').style.display = 'none';
        }
        document.getElementsByName('next')[0].value = 'Submit';
    };
	document.querySelector('.softwares1').addEventListener('change', function(){
		software1 = document.querySelector('.softwares1').selectedIndex;
		check(software1, 'otherSoftware', 'softwareLabel', 8, software1, software2, software3);
		exclusive(2, 3);
	});

	document.querySelector('.softwares2').addEventListener('change', function(){
		software2 = document.querySelector('.softwares2').selectedIndex;
		check(software2, 'otherSoftware', 'softwareLabel', 8, software1, software2, software3);
		exclusive(1, 3);
	});

	document.querySelector('.softwares3').addEventListener('change', function(){
		software3 = document.querySelector('.softwares3').selectedIndex;
		check(software3, 'otherSoftware', 'softwareLabel', 8, software1, software2, software3);
		exclusive(1, 2);
	});
			
    var p4 = function(){
        document.getElementsByName('back')[0].style.display = 'none';
        otherPriority = document.getElementById('otherPriority').value;
    };

    /* var progressBarWidth = function(k){
        width = k*25;
        document.querySelector('.progress-bar').style.width = width + "%";
        document.querySelector('.progress-bar').textContent = width + "%";
    }; */
	
	var check = function(x, id, name, val, v1, v2, v3){
		if(x === val){
            document.getElementById(id).style.display = "inline-block";
            document.getElementsByName(name)[0].style.display = "inline-block";
            //otherSoftware = document.getElementById(id).value;
        }
        if(v1 !== val &&v2 !== val && v3 !== val){
            document.getElementsByName(name)[0].style.display = "none";
            document.getElementById(id).style.display = "none";
        }
	};
	
	var exclusive = function(y, z){
		if(software1 === 0 || software1 === 1 || software2 === 0 || software2 === 1 || software3 === 0 || software3 === 1){
			document.getElementById('win7-' + y).disabled = true;
			document.getElementById('win10-' + y).disabled = true;
			document.getElementById('win7-' + z).disabled = true;
			document.getElementById('win10-' + z).disabled = true;
		} else{
			document.getElementById('win7-' + y).disabled = false;
			document.getElementById('win10-' + y).disabled = false;
			document.getElementById('win7-' + z).disabled = false;
			document.getElementById('win10-' + z).disabled = false;
		}
	};
    
    /*End of app.js*/
    /* STICKY NAVIGATION */
    $('.js--section-form').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky-nav');
        }
        else{
            $('nav').removeClass('sticky-nav');
        }
    },{
        offset: '400px'
    });
    
 
    
    /* SMOOTH SCROLLING */
       $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top-80
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
    
    

    /* Animations on scroll */
    /*$('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    $('.js--wp-2').waypoint(function(direction){
         $('.section-faq li').addClass('animated fadeIn');
         $('.section-faq h2').addClass('animated fadeIn');
    },{
        offset: '75%'
    })*/
       
    
    /*Mobile nav*/
    
    $('.js--nav-icon').click(function(){
        var nav= $('.js--main-nav');
        var icon= $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('icon ion-ios-menu')){
            icon.removeClass('icon ion-ios-menu');
            icon.addClass('icon ion-ios-close');
        }
        else{
            icon.removeClass('icon ion-ios-close');
            icon.addClass('icon ion-ios-menu');
        }
        
    })
    
    /*PRICE SLIDER*/
    $( "#slider-range" ).slider({
      range: true,
      min: 15,
      max: 100,
      values: [ 40, 50 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "\u20B9" + ui.values[ 0 ] + ",000 - \u20B9" + ui.values[ 1 ]+ ",000");
      }
    });
    $( "#amount" ).val( "\u20B9" + $( "#slider-range" ).slider( "values", 0 ) +
      ",000 - \u20B9" + $( "#slider-range" ).slider( "values", 1 ) + ",000" );
    
    
});

