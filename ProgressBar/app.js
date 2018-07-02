var width, k, name, email, min, max, priority1, priority2, priority3, game1, game2, game3, software1, software2, software3, otherPriority, otherGame, otherSoftware;
	
width = 25;
k = 1;
document.querySelector('.p1').style.visibility = '';
document.querySelector('.p2').style.visibility = 'hidden';
document.querySelector('.p3').style.visibility = 'hidden';
document.querySelector('.p4').style.visibility = 'hidden';
	
document.getElementById('next').addEventListener('click', function(e)
{	
	e.preventDefault();
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
		console.log(priority1);
		p2();
	}
	if(k == 3)
	{
		console.log(priority1);
		p3();
	}
	if(k == 4)
	{
		p4();
	}
	progressBarWidth(k);
});
	
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

	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	min = document.getElementById('min').value;
	max = document.getElementById('max').value;
};

var p2 = function()
{

	priority1 = document.querySelector('.priority1').selectedIndex;
	priority2 = document.querySelector('.priority2').selectedIndex;
	priority3 = document.querySelector('.priority3').selectedIndex;

	priority1 = document.getElementsByTagName("option")[priority1].value;
	priority2 = document.getElementsByTagName("option")[priority2].value;
	priority3 = document.getElementsByTagName("option")[priority3].value;

	otherPriority = document.getElementById('otherPriority').value;
};

var p3 = function()
{
	
	console.log(priority1);
	if(priority1 === "gaming" || priority2 === "gaming" || priority3 === "gaming")
	{
$(".games1").attr("disabled", "");
$(".games2").attr("disabled", "");
$(".games3").attr("disabled", "");

game1 = document.querySelector('.games1').selectedIndex;
game2 = document.querySelector('.games2').selectedIndex;
game3 = document.querySelector('.games3').selectedIndex;

game1 = document.getElementsByTagName("option")[game1].value;
game2 = document.getElementsByTagName("option")[game2].value;
game3 = document.getElementsByTagName("option")[game3].value;

$(".otherGame").attr("disabled", "disabled");

if(game2 === "none" || game3 === "none")
{
	$(".otherGame").attr("disabled", "");
	otherGame = document.getElementById('otherGame').value;
}
else
{
	$(".otherGame").attr("disabled", "disabled");
}
	}
	else
	{
$(".games1").attr("disabled", "disabled");
$(".games2").attr("disabled", "disabled");
$(".games3").attr("disabled", "disabled");
$(".otherGame").attr("disabled", "disabled");
	}

	software1 = document.querySelector('.softwares1').selectedIndex;
	software2 = document.querySelector('.softwares2').selectedIndex;
	software3 = document.querySelector('.softwares3').selectedIndex;

	software1 = document.getElementsByTagName("option")[software1].value;
	software2 = document.getElementsByTagName("option")[software2].value;
	software3 = document.getElementsByTagName("option")[software3].value;

	$(".otherSoftware").attr("disabled", "disabled");

	if(software2 === "none" || software3 === "none")
	{
$(".otherSoftware").attr("disabled", "");
otherSoftware = document.getElementById('otherSoftware').value;
	}
	else
	{
$(".otherSoftware").attr("disabled", "disabled");
	}
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