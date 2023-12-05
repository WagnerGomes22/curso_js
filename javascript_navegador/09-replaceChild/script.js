let novoElemento = document.createElement("p");
let texto = document.createTextNode("um novo texto");

novoElemento.appendChild(texto)

let titulo = document.querySelector(".Titulo");

let Paip = titulo.parentNode;

Paip.replaceChild(novoElemento, titulo);

// na solução a cima, fizemos a troca do h1 por um p, usando replaceChild