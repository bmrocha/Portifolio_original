export default function initBarrinhas() {
  const tecValor = [
    { nome: "git e github", valor: 85 },
    { nome: "html e css:", valor: 85 },
    { nome: "bootstrap", valor: 70 },
    { nome: "sass", valor: 60 },
    { nome: "javascript", valor: 75 },
    { nome: "typescript", valor: 60 },
    { nome: "react js", valor: 55 },
    { nome: "Wordpress", valor: 85 },
    { nome: "figma", valor: 50 },
    { nome: "sgbd (mysql)", valor: 60 },
    { nome: "mongoDB", valor: 60 },
    { nome: "php", valor: 65 },
    { nome: "python", valor: 80 },
    { nome: "node Js", valor: 50 },
    { nome: "windows server", valor: 85 },
    { nome: "linux", valor: 85 },
    { nome: "raspberry", valor: 60 },
    { nome: "aws", valor: 50 },
  ];

  const barrinhas = document.querySelectorAll(".js [data-js-grid-habilidade]");
  let span1, span2, div;

  if (barrinhas.length) {
    barrinhas.forEach((barrinha, index) => {
      span1 = barrinha.querySelector("span:nth-child(1)");
      span2 = barrinha.querySelector("span:nth-child(2)");
      span1.innerText = tecValor[index].nome.toUpperCase();
      span2.innerText = tecValor[index].valor + "%";
      div = barrinha.querySelector(".barrinha div");
      div.style.width = tecValor[index].valor + "%";
    });
  }
}






