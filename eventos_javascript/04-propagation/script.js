btn = document.querySelector(".btn");
btn2 = document.querySelector(".btn-parar");
p = document.querySelector(".p")

function msg(e) {
    console.log("clicou em mim")
    e.stopPropagation();
}

btn.addEventListener("click", msg);

btn2.addEventListener("click", function (event) {
    console.log(event)
});

p.addEventListener("click", function () {
    console.log("clicou no p")
});

// temos um elemento dentro do outro, quando clicamos dentro de um acionava o outro, usando o metedo e.stopPropagation, cancelamos isso e cada um dispara o seu propio evento