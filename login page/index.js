let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title");


    signinBtn.onclick = function(){
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In"
        signupBtn.classList.add("disable")
        signupBtn.classList.add("disable")

    }
    signupBtn.onclick = function(){
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign up";
        signupBtn.classList.remove("disable")
        signupBtn.classList.add("disable")
    
    }