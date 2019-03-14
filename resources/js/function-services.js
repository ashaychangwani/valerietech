var slideIndex = 1;
var count=0;
var timeOut;




$(document).ready(function(){
	
	var find;
	document.querySelector('.otherFind').style.display = "none";
    
    /* STICKY NAVIGATION */
    $('.js--section-services').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky-nav');
        }
        else{
            $('nav').removeClass('sticky-nav');
        }
    },{
        offset: '100px'
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
              
            });
          }
        }
      });
    
    

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    $('.js--wp-2').waypoint(function(direction){
         $('.section-faq li').addClass('animated fadeIn');
         $('.section-faq h2').addClass('animated fadeIn');
    },{
        offset: '75%'
    })
       
    
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
	document.getElementById('find-us').addEventListener('change', function(){
		find = document.getElementById('find-us').selectedIndex;
		console.log(find);
		if(find === 4){
			document.getElementsByName('otherFind')[0].style.display = "block";
            document.getElementsByName('otherFind')[0].required = true;
		}
		else{
			document.getElementsByName('otherFind')[0].style.display = "none";
		}
	});
});
