function atualizarMensagemBoasVindas() {
  const agora = new Date();
  const hora = agora.getHours();
  const mensagemBoasVindas = document.getElementById("mensagemBoasVindas");

  if (hora < 12) {
    mensagemBoasVindas.textContent = "Bom dia! Bem-vindo à Minha Página Web";
  } else if (hora < 18) {
    mensagemBoasVindas.textContent = "Boa tarde! Bem-vindo à Minha Página Web";
  } else {
    mensagemBoasVindas.textContent = "Boa noite! Bem-vindo à Minha Página Web";
  }
}

function onSubmit(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
}

document.addEventListener("DOMContentLoaded", atualizarMensagemBoasVindas);
