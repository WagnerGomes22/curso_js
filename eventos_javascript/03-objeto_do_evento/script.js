btn = document.querySelector(".btn");
btnParar = document.querySelector(".btn-parar");

function msg(e) {
    console.log(e);
}

btn.addEventListener("click", msg);

btnParar.addEventListener("click", function (event) {
    console.log(event)
});


// usando o event conseguimos ver todos os atributos, tanto onde a pessoa deu o click quanto a posicão 