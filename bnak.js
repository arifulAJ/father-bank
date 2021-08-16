document.getElementById('login-button').addEventListener('click',function(){
    const emailField=document.getElementById('input-email');
    const userEmail=emailField.value;
    //console.log(userEmail); 
    const passwordField=document.getElementById('input-password');
    const userPassword=passwordField.value;
    //console.log(userPassword);
    if(userEmail=="sons@gmail.com"&&userPassword=="secret"){
       window.location.href='banking.html';

    }
    else{console.log("account not found")}

});

