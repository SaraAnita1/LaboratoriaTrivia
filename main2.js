var pontos = document.querySelector(".points");

const pontuacao = localStorage.getItem("pontuacao");

pontos.innerHTML = `${pontuacao}/3`;
