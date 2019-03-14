
showSlides(slideIndex);

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