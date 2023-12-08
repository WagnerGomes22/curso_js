let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2")

btn.addEventListener("mousedown", function () {
    console.log("clique no botao")
});

// mostra quando voce clica no botao

btn.addEventListener("mouseup", function () {
    console.log("soltou o botao")

    // mostra quando voce solta o botao

});

btn2.addEventListener("dblclick", function () {
    console.log("dblclick")
    // sera executado quando voce dar dois clique no botao
});

btn2.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("clique botao direito")

    // aqui adcionamos o botao do clique no botao direito do mouse, passamos o parametro do evento na função e chamamos o metedo preventDefault para nao mostrar as info
});
