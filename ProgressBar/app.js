var width, k, name, email, min, max, priority1, priority2, priority3, game1, game2, game3, software1, software2, software3, otherPriority, otherGame, otherSoftware;
	
width = 25;
k = 1;


document.querySelector('.p1').style.visibility = '';
document.querySelector('.p2').style.visibility = 'hidden';
document.querySelector('.p3').style.visibility = 'hidden';
document.querySelector('.p4').style.visibility = 'hidden';

document.getElementById('next').addEventListener('click', function(e)
{	
	if(k == 1)
	{
		p1();
	}
	document.querySelector('.p' + k).style.visibility = 'hidden';
	k = k+1;
	document.querySelector('.p' + k).style.visibility = '';
	if(k > 1)
	{
		document.getElementById('back').disabled = false;
	}
	if(k == 2)
	{
		p2();
	}
	if(k == 3)
	{
		p3();
	}
	if(k == 4)
	{
		p4();
	}
	progressBarWidth(k);
});

document.getElementById('next').addEventListener('click', function(e)
{
	
}

document.getElementById('back').addEventListener('click', function(e)
{
	e.preventDefault();
	if(k > 1)
	{
		document.querySelector('.p' + k).style.visibility = 'hidden';
		k = k-1;
		document.querySelector('.p' + k).style.visibility = '';
		document.getElementById('back').disabled = true;
	}
	if(k > 1)
	{
		document.getElementById('back').disabled = false;
	}
	if(k < 3)
	{
		document.getElementById('next').textContent = 'Next >'
	}
	if(k == 1)
	{
		p1();
	}
	if(k == 2)
	{
		p2();
	}
	if(k == 3)
	{
		p3();
	}
	progressBarWidth(k);
});



var p1 = function()
{
	//document.getElementById('name').required = true;
	//document.getElementById('email').required = true;
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	min = document.getElementById('min').value;
	max = document.getElementById('max').value;
	
	$('input').prop('required', true);
};

var p2 = function()
{	
	
		document.querySelector('.priority1').addEventListener('change', function(){
			priority1 = document.querySelector('.priority1').selectedIndex;
		});
		
		document.querySelector('.priority2').addEventListener('change', function(){
			priority2 = document.querySelector('.priority2').selectedIndex;
			checkPriority(priority2);
		});
		
		document.querySelector('.priority3').addEventListener('change', function(){
			priority3 = document.querySelector('.priority3').selectedIndex;
			checkPriority(priority3);
		});
};

var p3 = function()
{
	if(priority1 === 2 || priority2 === 2 || priority3 === 2)
	{
		document.querySelector(".games1").disabled = false;
		document.querySelector(".games2").disabled = false;
		document.querySelector(".games3").disabled = false;
		
		document.querySelector('.games1').addEventListener('change', function(){
			game1 = document.querySelector('.games1').selectedIndex;
		});
		
		document.querySelector('.games2').addEventListener('change', function(){
			game2 = document.querySelector('.games2').selectedIndex;
			checkGame(game2);
		});
		
		document.querySelector('.games3').addEventListener('change', function(){
			game3 = document.querySelector('.games3').selectedIndex;
			checkGame(game3);
		});
	}
	else
	{
		document.querySelector(".games1").style.visibility = "hidden";
		document.querySelector(".games2").style.visibility = "hidden";
		document.querySelector(".games3").style.visibility = "hidden";
		document.querySelector(".otherGame").style.visibility = "hidden";
	}
	
	document.querySelector('.softwares1').addEventListener('change', function(){
			software1 = document.querySelector('.softwares1').selectedIndex;
		});
		
		document.querySelector('.softwares2').addEventListener('change', function(){
			software2 = document.querySelector('.softwares2').selectedIndex;
			checkSoftware(software2);
		});
		
		document.querySelector('.softwares3').addEventListener('change', function(){
			software3 = document.querySelector('.softwares3').selectedIndex;
			checkSoftware(software3);
		});
	document.getElementById('next').textContent = 'Submit';
};

var p4 = function()
{
	document.getElementById('next').style.visibility = 'hidden';
	document.getElementById('back').style.visibility = 'hidden';
};

var progressBarWidth = function(k)
{
	width = k*25;
	document.querySelector('.progress-bar').style.width = width + "%";
	document.querySelector('.progress-bar').textContent = width + "%";
};

var checkGame = function(x){
	if(x === 17)
	{
		//document.getElementById('otherGame').required = true;
		document.querySelector(".otherGame").disabled = false;
		otherGame = document.getElementById('otherGame').value;
	}
	if(game2 !== 17 && game3 !== 17)
	{
		document.querySelector('.otherGame').disabled = true;
	}
};
var checkSoftware = function(x){
	if(x === 9)
	{
		//document.getElementById('otherSoftware').required = true;
		document.getElementById('otherSoftware').disabled = false;
		otherSoftware = document.getElementById('otherSoftware').value;
	}
	if(software2 !== 9 && software3 !== 9)
	{
		document.getElementById('otherSoftware').disabled = true;
	}
};
var checkPriority = function(x){
	if(x === 6)
	{
		//document.getElementById('otherPriority').required = true;
		document.getElementById('otherPriority').disabled = false;
		otherPriority = document.getElementById('otherPriority').value;
	}
	if(priority2 !== 6 && priority3 !== 6)
	{
		document.getElementById('otherPriority').disabled = true;
	}
};