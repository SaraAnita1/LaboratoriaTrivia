function jogar() {
  var nomeInput = document.querySelector(".inputName");
  var nomeJogador = nomeInput.value;

  // Armazenar o nome em algum lugar, como localStorage
  localStorage.setItem("nome", nomeJogador);

  // Redirecionar para a página de questões
  window.location.href = "quest.html";
}
