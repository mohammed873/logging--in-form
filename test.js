
function validmail(){
    var mail = document.getElementById("mail").value;
    var error = document.getElementById("mail-zone");
    if(mail.match (/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML= "valid mail";
        error.style.color = "green" ;
        return true;
    }
    else{
        error.innerHTML= "unvalid mail";
        error.style.color = "red" ;
        return false;
    }
}

function validpassword(){
    var password = document.getElementById("password").value;
    var error = document.getElementById("password-zone");
    if (password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
        error.innerHTML= "valid password";
        error.style.color = "green" ;
        return true;
    }
    else{
        error.innerHTML= "unvalid password";
        error.style.color = "red" ;
        return false;
    }
}


function validation(){
    var alert1 =document.getElementById("alert");
    var alert2 = document.getElementById("alert1");
       if ( (!validmail() == true)  ||  (!validpassword() == true)){
      alert1.style.top = "115px";
       alert1.style.transition = "all.8s ease-in-out";
    }
    else{
        alert2.style.top = "115px";
        alert2.style.transition = "all.8s ease-in-out";
    }
}

//////////////////////////////////////////

function alert1(){
    var hide = document.getElementById("alert");
    hide.style.top = "-416px";
    hide.style.transition = "all.8s ease-in-out";
}

function alert2(){
    var hide = document.getElementById("alert1");
    hide.style.top = "-416px ";
    hide.style.transition = "all.8s ease-in-out";
}