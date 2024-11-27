const form = document.getElementById("loginForm");
const email = document.getElementById("email")
const password = document.getElementById("password")

function checkInputEmail(){
    const emailValue = email.value;
  
    if(emailValue === ""){
      errorInput(email, "O email é obrigatório.")
    }else{
      const formItem = email.parentElement;
      formItem.className = "form-group"
    }
  
  
}
  
  
function checkInputPassword(){
    const passwordValue = password.value;
  
    if(passwordValue === ""){
      errorInput(password, "A senha é obrigatória.")
    }else if(passwordValue.length < 8){
      errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
      const formItem = password.parentElement;
      formItem.className = "form-group"
    }
  
  
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  loginUser();
});

function loginUser() {
  const emailValue = email.value;
  const passwordValue = password.value;

  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData && userData.email === emailValue && userData.password === passwordValue) {
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
  } else {
    alert("Email ou senha incorretos.");
  }
}

// visibilidade da senha

const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
});