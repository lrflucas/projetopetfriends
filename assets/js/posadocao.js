// Função para gerar um telefone aleatório fictício

function gerarTelefoneAleatorio() {
    const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
    const parte1 = Math.floor(Math.random() * 9000) + 1000;    
    const parte2 = Math.floor(Math.random() * 9000) + 1000;    
    return `(${ddd}) ${parte1}-${parte2}`;
}

//

document.addEventListener("DOMContentLoaded", () => {
  const nomeAnimal = localStorage.getItem("animalAdotado");
  const mensagem = document.getElementById("mensagem");
  const telefone = document.getElementById("telefone");
  const paragrafoContato = document.querySelector("#pos-adocao h3:first-of-type");

  // Substitui [nomedoanimal] pelo nome do animal se encontrado
  if (nomeAnimal) {
      mensagem.textContent = `Parabéns por adotar ${nomeAnimal}!`;
      paragrafoContato.textContent = `Entre em contato com o responsável por ${nomeAnimal} pelo número:`;
  } else {
      mensagem.textContent = "Parabéns por sua adoção!";
      paragrafoContato.textContent = "Entre em contato com o responsável pelo pet pelo número:";
  }

  telefone.textContent = gerarTelefoneAleatorio();
});

//  logout

window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Você precisa estar logado para acessar esta página");
        window.location.href = "abacadastro.html";
    }

    const navLogout = document.getElementById("nav-logout");
    const logoutBtn = document.getElementById("logout");

    if (user) {

      navLogout.style.display = "inline-block";
      

      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user"); 
        alert("Você foi desconectado!");
        window.location.reload(); 
      });
    } else {
      navLogout.style.display = "none";
    }
  });
