
$(document).ready(function(){
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
        offset: '65%'
    });
    
	var find;
	document.querySelector('.otherFind').style.display = "none";
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