const log_btn = document.getElementById("login-button");

// check if the username and password is at least greater then 5
log_btn.addEventListener('click', function() {
    let email_user = document.getElementById("email_user");
    let pass = document.getElementById("password");
    if (email_user.innerHTML.length < 3 || pass.innerHTML.length < 5) {
        console.log("Username should be greater then 3\n Password should be greater then 5");
    }
});