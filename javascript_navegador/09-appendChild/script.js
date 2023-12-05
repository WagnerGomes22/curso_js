let novoElementos = document.createElement("p");
let texto = document.createTextNode("um novo texto");

novoElementos.appendChild(texto);

let p = document.querySelector(".Titulo");

let pai = p.parentNode;
// para pegar o elemento pai

pai.appendChild(novoElementos);
// adicionar o texto no elemento pai, usando appendChild

// na solucão acima pegamos o elemento "P" e adicionamos o texto dentro do elemento pai, so que ele vai ficar em ultima posição 