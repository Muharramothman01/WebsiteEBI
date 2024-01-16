 let users = JSON.parse(localStorage.getItem('users')) || [];
 let pop = document.getElementById("popup");
 let policy = document.getElementById("acceptPolicy");
 let moveToLoginBtn = document.getElementById("moveToLoginBtn");
 
 function openpop() {
    pop.classList.add("popup-open");
}


function closepop() {
    pop.classList.remove("popup-open");
}


function registerUser() {
     let email = document.getElementById('email').value;
     let password = document.getElementById('password').value;
     let Password2 = document.getElementById('confirmPassword').value;
     let phone = document.getElementById('phone').value;
     let gender = document.querySelector('input[name="gender"]:checked').value;

     if (password !== Password2) {
         alert("Passwords do not match");
         return;
     }
     if (email.indexOf('@gmail') === -1) {
        alert("email is not valid");
    }
    

     let userExists = users.some(function(egUser) {
         return egUser.email === email;
     });

     if (userExists) {
         alert("email already exists");
     } else {
         let user = {
             email: email,
             password: password,
             phone: phone,
             gender: gender
         };

         users.push(user);
         localStorage.setItem('users', JSON.stringify(users));
         openpop();
     }
}

 function changePolicy(){
    if(policy.checked){
        moveToLoginBtn.removeAttribute("disabled");
        moveToLoginBtn.classList.add("buttonEnabled");
    }

    else{
        moveToLoginBtn.setAttribute('disabled', true);
        moveToLoginBtn.classList.remove("buttonEnabled");
    }
}

 function moveToLogin(){
    window.location.href = "../Login/Login.html";
 }

 function loginUser() {
     let email = document.getElementById('email').value;
     let password = document.getElementById('password').value;

     let loggedInUser = users.find(function(user) {
         return user.email === email && user.password === password;
     });

     if (loggedInUser) {
         alert("Login successful");
         window.location.href = "../home/index.html";
     } else {
         alert("Invalid email or password");
     }
}

policy.addEventListener("change",changePolicy);