
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conpassword = document.getElementById("conpassword");
const mobile = document.getElementById("mobile");


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

// validate form

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const conpasswordValue = conpassword.value.trim();


    if (usernameValue === '') {
        setError(username, 'Username Cannot Be Empty');
    }
    else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email Cannot Be Empty');
    }
    else {
        setSuccess(email);
    }

    if (passwordValue.length < 8) {
        setError(password, 'Password Must Contain Atleast 8 Characters');
    }
    else {
        setSuccess(password);
    }

    if (conpasswordValue === '') {
        setError(conpassword, 'Password Cannot Be Empty');
    }
    else if (conpasswordValue !== passwordValue) {
        setError(conpassword, 'Password Does Not Match');
    }
    else {
        setSuccess(conpassword);
    }

// validate form and login

    if (usernameValue && emailValue && passwordValue && conpasswordValue === "") {
        alert ('Please Enter Your Details.');
    }
    else if(passwordValue.length < 8 ){
        setError(password, 'Password Must Contain Atleast 8 Characters');
    }
    else if(conpasswordValue !== passwordValue){
        setError(conpassword, 'Password Does Not Match');
    }
    else{
        console.log("Name : " + usernameValue);
        console.log("Email : " + emailValue);
        console.log("Password : " + passwordValue);
        console.log("Confirm Password : " + conpasswordValue);
        window.open ("http://127.0.0.1:5500/Form/home.html", "_blank") ;
    }
   
}


function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check box validation and popup

function myFunction() {
    checkbox = document.getElementById('checkbox'); 
    const mobileValue = mobile.value.trim();

    if (checkbox.checked == false) {
        alert('Please Accept The Terms & Conditons.');
    }
    else if(mobileValue === ""){
        setError(mobile, 'Please Enter Your Mobile Number');
    }
    else if (mobileValue.length !== 10){
        setError(mobile, 'Mobile Number Should Be 10 Digits Long.');
    
    }   
    else {
        console.log("Mobile Number : " + mobileValue);
        popup = document.getElementById("popup").style.display = 'block';
    }
    
}

// close popup

function Close() {
    popup = document.getElementById("popup").style.display = 'none';
}



