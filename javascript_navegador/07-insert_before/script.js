let novoElementos = document.createElement("p");
let texto = document.createTextNode("um novo texto");

novoElementos.appendChild(texto);

let elementoAlvo = document.querySelector(".titulo");
let elementoPai = document.querySelector(".conteudo")

elementoPai.insertBefore(novoElementos, elementoAlvo);