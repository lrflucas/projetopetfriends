window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const navCadastro = document.getElementById("nav-cadastro");
    const navLogin = document.getElementById("nav-login");
    const navLogout = document.getElementById("nav-logout");
    const logoutBtn = document.getElementById("logout");

    if (user) {

      navCadastro.style.display = "none";
      navLogin.style.display = "none";
      navLogout.style.display = "inline-block";
      

      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user"); 
        alert("Você foi desconectado!");
        window.location.reload(); 
      });
    } else {
      navCadastro.style.display = "inline-block";
      navLogin.style.display = "inline-block";
      navLogout.style.display = "none";
    }
  });