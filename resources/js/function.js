
    $(document).ready(function(){

var divs1 = $('blockquote[id^="testimonials1-"]').hide(),
    i1 = 0;
var divs2 = $('blockquote[id^="testimonials2-"]').hide(),
    i2 = 0;
var divs3 = $('blockquote[id^="testimonials3-"]').hide(),
    i3 = 0;
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
});

