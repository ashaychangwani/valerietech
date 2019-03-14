var slideIndex = 1;
var count=0;
var timeOut;



$(document).ready(function(){
	
	var find;
	document.querySelector('.otherFind').style.display = "none";
	
    /* STICKY NAVIGATION */
    $('.js--section-mission').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky-nav');
        }
        else{
            $('nav').removeClass('sticky-nav');
        }
    },{
        offset: '100px'
    });
    
    
    
    /*Smooth Scroll for Buttons*/
    $('.js--scroll-to-contact').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-contact').offset().top},1000);
    });
    $('.js--scroll-to-services').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-services').offset().top - 80},1000);
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
              };
            });
          }
        }
      });
    
    

    /* Testimonials animation */
        var divs1 = $('blockquote[id^="testimonials1-"]').hide(),
            i1 = 0;
        var divs2 = $('blockquote[id^="testimonials2-"]').hide(),
            i2 = 0;
        var divs3 = $('blockquote[id^="testimonials3-"]').hide(),
            i3 = 0;
        if( $(window).width() > 768)
        {
            (function cycle() { 
                divs1.eq(i1).fadeIn(1000)
                          .delay(3500)
                          .fadeOut(1000).delay(1000);
                divs2.eq(i2).delay(1000)
                            .fadeIn(1000)
                            .delay(3500)
                            .fadeOut(1000,cycle);

                divs3.eq(i3).delay(500)
                            .fadeIn(1000)
                            .delay(3500)
                            .fadeOut(1000);
                i1 = ++i1 % 2;
                i2=i1;
                i3=i1;
            })();
        }
        else{
            (function cycle() { 
                divs1.eq(i1).fadeIn(1000)
                          .delay(3500)
                          .fadeOut(1000).delay(1000);
                divs2.eq(i2).delay(500)
                            .fadeIn(1000)
                            .delay(3000)
                            .fadeOut(1000);
                divs3.eq(i3).delay(1000)
                            .fadeIn(1000)
                            .delay(2500)
                            .fadeOut(1000,cycle);

                i1 = ++i1 % 2;
                i2=i1;
                i3=i1;
            })();
        }

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
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