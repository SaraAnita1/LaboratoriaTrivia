var nomeJogador = "";
var pontuacao = 0;

function jogar() {
  event.preventDefault();
  var nomeInput = document.querySelector(".inputName");
  var nomeJogador = nomeInput.value;

  if (nomeJogador.trim() === "") {
    alert("O nome do jogador não pode ser em branco");
  } else {
    // Armazenar o nome em algum lugar, como localStorage
    localStorage.setItem("nome", nomeJogador);
    // Redirecionar para a página de questões
    window.location.href = "quest.html";
  }
}

function validarResposta() {
  event.preventDefault();
  var opcaoSelecionada = document.querySelector(
    'input[name="opcoes1"]:checked'
  );

  if (opcaoSelecionada) {
    if (opcaoSelecionada.value === "a") {
      pontuacao++;
      alert("Resposta correta!");
    } else {
      alert("Resposta incorreta.");
    }
    window.location.href = "quest2.html";
  } else {
    alert("Selecione uma opção antes de prosseguir.");
  }
}

function validarResposta2() {
  event.preventDefault();

  var opcaoSelecionada = document.querySelector(
    'input[name="opcoes2"]:checked'
  );

  if (opcaoSelecionada) {
    if (opcaoSelecionada.value === "b") {
      pontuacao++;
      alert("Resposta correta!");
    } else {
      alert("Resposta incorreta.");
    }
    window.location.href = "quest3.html";
  } else {
    alert("Selecione uma opção antes de prosseguir.");
  }
}

function validarResposta3() {
  event.preventDefault();

  var opcaoSelecionada = document.querySelector(
    'input[name="opcoes3"]:checked'
  );

  if (opcaoSelecionada) {
    if (opcaoSelecionada.value === "c") {
      pontuacao++;
      alert("Resposta correta!");
    } else {
      alert("Resposta incorreta.");
    }
    window.location.href = "results.html";
    localStorage.setItem("pontuacao", pontuacao);
   
  } else {
    alert("Selecione uma opção antes de prosseguir.");
  }
}
