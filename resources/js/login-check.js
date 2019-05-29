pass_level=0;

function passVerify()
{
    var pass1=document.getElementById("password");
    var pass2=document.getElementById("confirm-password");
    var label=document.getElementById("error");
    label.style.display="block";
    if(pass1.value!=pass2.value)
    {
        label.innerText="Passwords don't match";
    }
    if(pass1.value==pass2.value)
        label.style.display="none";
    
}


function checkRegister()
{
    var error=document.getElementById("error");
    
    if(error.style.display=="none" and pass_level>=2)
        return true;
    elif(error.style.display!="none"){
        alert("Passwords do not match");
        return false;
    }
    else
        {
            alert("Password too weak");
            return false;
        }
}

function passStr()
{
    pass_buf_value = document.getElementById("password").value;
    pass_level = 0;
    if (pass_buf_value.match(/[a-z]/g)) {
        pass_level++;
    }
    if (pass_buf_value.match(/[A-Z]/g)) {
        pass_level++;
    }
    if (pass_buf_value.match(/[0-9]/g)) {
        pass_level++;
    }
    if (pass_buf_value.length < 5) {
        if(pass_level >= 1) pass_level--;
    } else if (pass_buf_value.length >= 20) {
        pass_level++;
    }
    output_val = '';
    switch (pass_level) {
        case 1: output_val='Weak'; break;
        case 2: output_val='Normal'; break;
        case 3: output_val='Strong'; break;
        case 4: output_val='Very strong'; break;
        default: output_val='Very weak'; break;
    }
    if (document.getElementById("passStr").value != pass_level) {
        document.getElementById("passStr").value = pass_level;
        document.getElementById("passStr").innerHTML = "Password Strength: "+output_val;
    }
}