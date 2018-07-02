/* document.addEventListener('DOMContentLoaded', function () {
   x = document.querySelector('.priority1').selectedIndex;
   alert(document.getElementsByTagName("option")[x].value);
}); */
document.querySelector('#next').addEventListener('click', function(){
	
	var name, email, min, max, priority1, priority2, priority3, game1, game2, game3, software1, software2, software3, otherPriority, otherGame, otherSoftware;
	
	if($(this).attr("id") != "panel1")
	{
		name = document.getElementById('name').value;
		email = document.getElementById('email').value;
		min = document.getElementById('min').value;
		max = document.getElementById('max').value;
	}
	
	if($(this).attr("id") != "panel2")
	{
		priority1 = document.querySelector('.priority1').selectedIndex;
		priority2 = document.querySelector('.priority2').selectedIndex;
		priority3 = document.querySelector('.priority3').selectedIndex;
		
		priority1 = document.getElementsByTagName("option")[priority1].value;
		priority2 = document.getElementsByTagName("option")[priority2].value;
		priority3 = document.getElementsByTagName("option")[priority3].value;
		
		otherPriority = document.getElementById('otherPriority').value;
	}
	
	if($(this).attr("id") != "panel3")
	{
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
			
			otherGame = document.getElementById('otherGame').value;
			
		}
		else
		{
			$(".games1").attr("disabled", "disabled");
			$(".games2").attr("disabled", "disabled");
			$(".games3").attr("disabled", "disabled");
		}
		
		software1 = document.querySelector('.softwares1').selectedIndex;
		software2 = document.querySelector('.softwares2').selectedIndex;
		software3 = document.querySelector('.softwares3').selectedIndex;
		
		software1 = document.getElementsByTagName("option")[software1].value;
		software2 = document.getElementsByTagName("option")[software2].value;
		software3 = document.getElementsByTagName("option")[software3].value;
		
		otherSoftware = document.getElementById('otherSoftware').value;
	}
	/* if($(this).attr("id") != "panel1" && $(this).attr("id") != "panel2" && $(this).attr("id") != "panel3" && $(this).attr("id") == "thanks")
	{
		document.getElementById('next').textContent = "Submit";
	} */
});