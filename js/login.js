//step 1: add eventHandler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //to get the input text we have to use .value 
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // for password same process
    const passField = document.getElementById("user-password");
    const pass = passField.value;
    
    //Now varify the email and password!
    //Danger: do not verify email and pass in client side!!
    if(email === "sumumahi@gmail.com" && pass === "6244"){
        window.location.href = "bank.html"
    }else{
       alert("Wrong email or password!!!!")
    }
})