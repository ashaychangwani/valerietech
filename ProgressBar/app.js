 $(document).ready(function(){
    
    var width, k, name, email, min, max, priority1, priority2, priority3, game1, game2, game3, software1, software2, software3, otherPriority, otherGame, otherSoftware, buttonPressed;
	

    document.querySelector('.p1').style.visibility = '';
    document.querySelector('.p2').style.display = 'none';
    document.querySelector('.p3').style.display = 'none';
    document.querySelector('.p4').style.display = 'none';
    document.getElementsByName("gameLabel")[0].style.display = "none";
    document.querySelector('.otherGame').style.display = "none";
    document.getElementsByName("softwareLabel")[0].style.display = "none";
    document.querySelector('.otherSoftware').style.display = "none";

     
    var test=document.getElementsByName("back")[0].style.display="none";
    width = 25;
    k = 1;
     
	$('.submitButton').click(function(){buttonPressed = $(this).attr('name');});
     
    $(".main-form").submit(function(event){
        event.preventDefault();
        if(buttonPressed === "next"){
			
        if(k == 1){p1();}
		
        document.querySelector('.p' + k).style.display = 'none';
        k = k+1;
        document.querySelector('.p' + k).style.display = 'block';
            
        if(k > 1){var test=document.getElementsByName("back")[0].style.display="inline-block";}
        if(k == 3){
            p3();
            document. getElementsByName('next').textContent = 'Submit';
        }
        if(k == 4){p4();}
        progressBarWidth(k);            
        }
        else if(buttonPressed === "back"){
            
        if(k > 1){
			document.querySelector('.p' + k).style.display = 'none';
            k = k-1;
            document.querySelector('.p' + k).style.display = 'block';
        }
        if(k > 1){document.getElementsByName("back")[0].style.display="inline-block";}
		
        else{document.getElementsByName("back")[0].style.display="none";}
		
        if(k <= 3){
            document.getElementsByName('next')[0].value = 'Next';
            document.getElementsByName('next')[0].style.display = "inline-block";
        }
        if(k == 1){p1();}
		
        if(k == 3){p3();}
        progressBarWidth(k);
        }
    });

	var p1 = function(){
		name = document.getElementById('name').value;
		email = document.getElementById('email').value;
		min = document.getElementById('min').value;
		max = document.getElementById('max').value;
	};
     
	document.querySelector('.priority1').addEventListener('change', function(){priority1 = document.querySelector('.priority1').selectedIndex;});
		
	document.querySelector('.priority2').addEventListener('change', function(){priority2 = document.querySelector('.priority2').selectedIndex;});
		
	document.querySelector('.priority3').addEventListener('change', function(){priority3 = document.querySelector('.priority3').selectedIndex;});
    var p3 = function(){
        if(priority1 === 1 || priority2 === 1 || priority3 === 1){
            document.querySelector(".games1").style.display = "inline-block";
            document.querySelector(".games2").style.display = "inline-block";
            document.querySelector(".games3").style.display = "inline-block";
            
            document.querySelector('.games1').addEventListener('change', function(){
                game1 = document.querySelector('.games1').selectedIndex;
            });

            document.querySelector('.games2').addEventListener('change', function(){
                game2 = document.querySelector('.games2').selectedIndex;
                check(game2, 'otherGame', 'gameLabel', 17, game2, game3);
            });

            document.querySelector('.games3').addEventListener('change', function(){
                game3 = document.querySelector('.games3').selectedIndex;
                check(game3, 'otherGame', 'gameLabel', 17, game2, game3);
            });
        }else{
            document.querySelector(".games1").style.display = "none";
            document.querySelector(".games2").style.display = "none";
            document.querySelector(".games3").style.display = "none";
            document.querySelector(".otherGame").style.display = "none";
            document.getElementsByName("gameLabel")[0].style.display = "none";
        }
        document.getElementsByName('next')[0].value = 'Submit';
    };
	document.querySelector('.softwares1').addEventListener('change', function(){
		software1 = document.querySelector('.softwares1').selectedIndex;
		exclusive(2, 3);
	});

	document.querySelector('.softwares2').addEventListener('change', function(){
		software2 = document.querySelector('.softwares2').selectedIndex;
		check(software2, 'otherSoftware', 'softwareLabel', 8, software2, software3);
		exclusive(1, 3);
	});

	document.querySelector('.softwares3').addEventListener('change', function(){
		software3 = document.querySelector('.softwares3').selectedIndex;
		check(software3, 'otherSoftware', 'softwareLabel', 8, software2, software3);
		exclusive(1, 2);
	});
			
    var p4 = function(){
        document.getElementsByName('next')[0].style.display = 'none';
        otherPriority = document.getElementById('otherPriority').value;
    };

    var progressBarWidth = function(k){
        width = k*25;
        document.querySelector('.progress-bar').style.width = width + "%";
        document.querySelector('.progress-bar').textContent = width + "%";
    };
	
	var check = function(x, id, name, val, v2, v3){
		if(x === val){
            document.getElementById(id).style.display = "inline-block";
            document.getElementsByName(name)[0].style.display = "inline-block";
            otherSoftware = document.getElementById(id).value;
        }
        if(v2 !== val && v3 !== val){
            document.getElementsByName(name)[0].style.display = "none";
            document.getElementById(id).style.display = "none";
        }
	};
	
	var exclusive = function(y, z){
		if(software1 === 1 || software1 === 2 || software2 === 1 || software2 === 2 || software3 === 1 || software3 === 2){
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
}); 