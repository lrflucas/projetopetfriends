// cadastro

const form = document.getElementById("form-cadastro");
const nomecompleto = document.getElementById("nome-completo")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const cpf = document.getElementById("cpf")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})

nomecompleto.addEventListener("blur", () => {
  checkInputNomeCompleto();
})

telefone.addEventListener("blur", () => {
  checkInputTelefone();
})

cpf.addEventListener("blur", () => {
  checkInputCpf();
})


function checkInputNomeCompleto(){
  const nomecompletoValue = nomecompleto.value;

  if(nomecompletoValue === ""){
    errorInput(nomecompleto, "Preencha o nome completo!")
  }else{
    const formItem = nomecompleto.parentElement;
    formItem.className = "form-group"
  }

}

function checkInputTelefone(){
  const telefoneValue = telefone.value;

  if(telefoneValue === ""){
    errorInput(telefone, "Preencha o telefone!")
  }else if(telefoneValue.length < 14){
    errorInput(telefone, "O telefone precisa ter o DDD e 9 caracteres.")
  }else{
    const formItem = telefone.parentElement;
    formItem.className = "form-group"
  }

}

function checkInputCpf(){
  const cpfValue = cpf.value;

  if(cpfValue === ""){
    errorInput(cpf, "Preencha o CPF!")
  }else if(cpfValue.length < 14){
    errorInput(cpf, "O CPF precisa ter 11 caracteres.")
  }else{
    const formItem = cpf.parentElement;
    formItem.className = "form-group"
  }

}

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


function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if(confirmationPasswordValue === ""){
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
  }else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation, "As senhas não são iguais.")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-group"
  }


}


function checkForm(){
  checkInputNomeCompleto();
  checkInputEmail();
  checkInputTelefone();
  checkInputCpf();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-group")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-group"
  });

  if(isValid){
    const user = { 
      nome: nomecompleto.value,
      email: email.value,
      telefone: telefone.value,
      cpf: cpf.value,
      password: password.value,
    };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html"
  }

}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-group error"

}

// máscara de cpf e telefone

cpf.addEventListener("keypress", () => {
    let inputlength = cpf.value.length
    
    if (inputlength === 3 || inputlength === 7) {
        cpf.value += "."
    } else if (inputlength === 11) {
        cpf.value += "-"
    }
})

telefone.addEventListener("keypress", () => {
    let inputlength = telefone.value.length
    
    if (inputlength === 0) {
        telefone.value += "("
    } else if (inputlength === 3) {
        telefone.value += ")"
    } else if (inputlength === 9) {
        telefone.value += "-"
    }
})

// visibilidade da senha

document.getElementById("toggle-password").addEventListener("click", function() {
  const passwordField = document.getElementById("password");
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
});

document.getElementById("toggle-password-confirmation").addEventListener("click", function() {
  const passwordConfirmationField = document.getElementById("password-confirmation");
  const type = passwordConfirmationField.type === "password" ? "text" : "password";
  passwordConfirmationField.type = type;
});