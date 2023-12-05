btn = document.querySelector(".btn");
btnParar = document.querySelector(".btn-parar");

function msg() {
    console.log("clicou");
}

btn.addEventListener("click", msg);

// para excluir esse evento precisamos criar uma função para exclui ele, como foi feito na linha 4 function msg


btnParar.addEventListener("click", function () {
    btn.removeEventListener("click", msg)
});

// principais erros que vc teve aqui. Olhe se vc escreveu certo os nomes, nao cometa esses deslize.
// aqui aprendemos a excluir um evento 

