showSlides(slideIndex);

document.getElementsByClassName("banners")[2].style.backgroundPosition="center";
document.getElementsByClassName("banners")[3].style.backgroundPosition="center";
document.getElementsByClassName("banners")[4].style.backgroundPosition="center";
document.getElementsByClassName("banners")[5].style.backgroundPosition="center";
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