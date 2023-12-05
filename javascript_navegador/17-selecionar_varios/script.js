let itens = document.querySelectorAll(".itens-azul")

console.log(itens[0].style.color);

itens[0].style.color = 'blue';

console.log(itens[1].style.color);

itens[1].style.color = 'red';


let itens2 = document.querySelectorAll(".itens-vermelho");

console.log(itens2[0].style.color);
itens2[0].style.color = 'yellow';

console.log(itens2[1].style.color);
itens2[1].style.color = 'pink';

// acima conseguimos pegar cada elemento da lista e personalizar da forma que quisermos, eu coloquei uma cor em cada item