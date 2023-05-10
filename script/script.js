username = document.getElementById("username");
password = document.getElementById("password");
form = document.getElementById("form");
function check() {
    usernameValue = username.value.trim();
    passwordValue = password.value.trim();

    if (usernameValue === "") {
        setError(username, 'Please Enter Your Username.');
    }
    else {
        setSuccess(username);
    }
    if (passwordValue === "") {
        setError(password, 'Please Enter Your password.');
    }
    else if (password.value.length < 8) {
        setError(password, 'Password Must Contain 8 Characters.');
    }
    else {
        setSuccess(password);
    }
    if (usernameValue !="" && passwordValue != "" && passwordValue.length >= 8) {
        setSuccess(username);
        setSuccess(password);
        console.log("Name : " + usernameValue);
        console.log("Name : " + passwordValue);
        window.open("http://127.0.0.1:5500/Form/home.html", "_blank");
    }
    else if (usernameValue ==="" && passwordValue === "" && passwordValue.length < 8){
        setError(username, 'Please Enter Your Username.');
        setError(password, 'Please Enter Your Password.');
    }
    else{
        alert ("Enter Your Login Details.")
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


// eye icon

function show() {

    if (password.value.length > 0) {
        document.getElementById("show").style.display = "block";
    }
    else {
        document.getElementById("show").style.display = "none";
    }

}

function change() {
    if (password.type == "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}