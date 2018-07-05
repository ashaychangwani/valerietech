 $(document).ready(function(){
    
    var width, k, name, email, min, max, priority1=1, priority2=1, priority3=1, game1, game2, game3, software1, software2, software3, otherPriority, otherGame, otherSoftware, buttonPressed;
	

    document.querySelector('.p1').style.visibility = '';
    document.querySelector('.p2').style.display = 'none';
    document.querySelector('.p3').style.display = 'none';
    document.querySelector('.p4').style.display = 'none';
    document.getElementsByName("gameLabel")[0].style.display = "inline-block";
    document.querySelector('.otherGame').style.display = "none";
    document.getElementsByName("softwareLabel")[0].style.display = "none";
    document.querySelector('.otherSoftware').style.display = "none";

     
    var test=document.getElementsByName("back")[0].style.display="none";
    width = 25;
    k = 1;
     
     $('.submitButton').click(function(){
         buttonPressed = $(this).attr('name');
     });
     
    $(".main-form").submit(function(event){
        event.preventDefault();
        if(buttonPressed === "next"){
        if(k == 1)
        {
            p1();
        }
        document.querySelector('.p' + k).style.display = 'none';
        k = k+1;
        document.querySelector('.p' + k).style.display = 'block';
            
        if(k > 1)
        {
                var test=document.getElementsByName("back")[0].style.display="inline-block";

        }
        if(k == 3)
        {
            p3();
            document. getElementsByName('next').textContent = 'Submit';
            
        }
        if(k == 4)
        {
            p4();        
        }
        progressBarWidth(k);
        

            
        }
        else if(buttonPressed === "back"){
            
            if(k > 1)
        {
            document.querySelector('.p' + k).style.display = 'none';
            k = k-1;
            document.querySelector('.p' + k).style.display = 'block';
        }
        if(k > 1)
        {        
            document.getElementsByName("back")[0].style.display="inline-block";

        }
        else{
        document.getElementsByName("back")[0].style.display="none";
            
        }
        if(k <= 3)
        {
            document.getElementsByName('next')[0].value = 'Next';
            document.getElementsByName('next')[0].style.display = "inline-block";
        }
        if(k == 1)
        {
            p1();
        }
        if(k == 3)
        {
            p3();
        }
        progressBarWidth(k);
        

        }
    });

         var p1 = function()
        {
            
            name = document.getElementById('name').value;
            email = document.getElementById('email').value;
            min = document.getElementById('min').value;
            max = document.getElementById('max').value;
        };
     
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
    var p3 = function()
    {
        
        if(priority1 === 2 || priority2 === 2 || priority3 === 2)
        {
            document.querySelector(".games1").style.display = "inline-block";
            document.querySelector(".games2").style.display = "inline-block";
            document.querySelector(".games3").style.display = "inline-block";
            
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
            document.querySelector(".games1").style.display = "none";
            document.querySelector(".games2").style.display = "none";
            document.querySelector(".games3").style.display = "none";
            document.querySelector(".otherGame").style.display = "none";
            document.getElementsByName("gameLabel")[0].style.display = "none";
        }
        alert("t");
        document.getElementsByName('next')[0].value = 'Submit';

    };
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
    var p4 = function()
    {
        document.getElementsByName('next')[0].style.display = 'none';
        otherPriority = document.getElementById('otherPriority').value;
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
            document.querySelector(".otherGame").style.display = "inline-block";
            document.getElementsByName("gameLabel")[0].style.display = "inline-block";
            otherGame = document.getElementById('otherGame').value;
        }
        if(game2 !== 17 && game3 !== 17)
        {
            document.getElementsByName("gameLabel")[0].style.display = "none";
            document.querySelector('.otherGame').style.display = "none";
        }
    };
    var checkSoftware = function(x){
        if(x === 9)
        {
            //document.getElementById('otherSoftware').required = true;
            document.getElementById('otherSoftware').style.display = "inline-block";
            document.getElementsByName("softwareLabel")[0].style.display = "inline-block";
            otherSoftware = document.getElementById('otherSoftware').value;
        }
        if(software2 !== 9 && software3 !== 9)
        {
            document.getElementsByName("softwareLabel")[0].style.display = "none";
            document.querySelector('.otherSoftware').style.display = "none";
        }
    };

}); 
