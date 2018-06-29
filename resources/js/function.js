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
  var hbuttons = document.getElementsByClassName("hero");
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
  hbuttons[0].style.display="inline-block";
    hbuttons[1].style.display="inline-block";
  htext[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  //timeOut=setTimeout(plusSlides,5000,1);
    
    
}
$(document).ready(function(){

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
       
});

