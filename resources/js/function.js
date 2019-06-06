var currentSec='hero';


var $sectionMission=$('.section-mission');
var $sectionWhyUs=$('.section-why-us');
var $sectionGrid=$('.section-grid');
var $sectionServices=$('.section-services');
var $sectionTesti=$('.section-testimonials');
var $sectionContact=$('.section-contact');


window.onwheel=beforeScroll;

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
		//console.log(find);
		if(find === 4){
			document.getElementsByName('otherFind')[0].style.display = "block";
            document.getElementsByName('otherFind')[0].required = true;
		}
		else{
			document.getElementsByName('otherFind')[0].style.display = "none";
		}
	});
});


function beforeScroll(e)
{
    if (e.type == 'wheel') {
        if (e.deltaY < 0) {
            scrollUp();
        } else {
            scrollDown();
        }
    }
    else if (e.type == 'keydown' && (e.key == 'ArrowDown' || e.key == 'ArrowUp')) {
        if (e.key == 'ArrowDown')
            scrollDown();
        else if (e.key == 'ArrowUp')
            scrollUp();
    }
    //console.log(currentSec);
    e.preventDefault();
    return;
}

function scrollDown(){   
    $('html,body').stop();
    switch(currentSec){
        case "hero":
            $('html,body').animate({scrollTop: $('.section-mission').offset().top-400},500);
            currentSec='mission';
            break;
        case "mission":
            $('html,body').animate({scrollTop: $('.section-why-us').offset().top-400},500);
            currentSec='why-us';
            break;
        case "why-us":
            $('html,body').animate({scrollTop: $('.section-grid').offset().top-200},500);
            currentSec='grid';
            break;
        case "grid":
            $('html,body').animate({scrollTop: $('.section-services').offset().top-100},500);
            currentSec='services';
            break;
        case "services":
            $('html,body').animate({scrollTop: $('.section-testimonials').offset().top-100},500);
            currentSec='testi';
            break;
        case "testi":
            $('html,body').animate({scrollTop: $('.section-contact').offset().top-100},500);
            currentSec='contact';
            break;
        case "contact":
            $('html,body').animate({scrollTop: $('.section-contact').offset().top+500},500);
            break;
        case "footer":
            break;        
    }
}



function scrollUp(){   
    $('html,body').stop();
    switch(currentSec){
        case "hero":
            break;
        case "mission":
            $('html,body').animate({scrollTop: $('#header').offset().top-300},500);
            currentSec='hero';
            break;
        case "why-us":
            $('html,body').animate({scrollTop: $('.section-mission').offset().top-400},500);
            currentSec='mission';
            break;
        case "grid":
            $('html,body').animate({scrollTop: $('.section-why-us').offset().top-400},500);
            currentSec='why-us';
            break;
        case "services":
            $('html,body').animate({scrollTop: $('.section-grid').offset().top-200},500);
            currentSec='grid';
            break;
        case "testi":
            $('html,body').animate({scrollTop: $('.section-services').offset().top-100},500);
            currentSec='services';
            break;
        case "contact":
            $('html,body').animate({scrollTop: $('.section-testimonials').offset().top-100},500);
            currentSec='testi';
            break;
    }
}






