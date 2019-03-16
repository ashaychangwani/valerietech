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
    /* STICKY NAVIGATION */
    $('.js--section-trigger').waypoint(function(direction){
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
       //To close menu only if it's a mobile screen:
       if($("#hamburg").css("display")!="none")
       {
           closeMenu();
       }
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
        
    });
    
});

function closeMenu(){
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
}