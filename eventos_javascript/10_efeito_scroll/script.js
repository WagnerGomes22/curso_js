window.addEventListener("scroll", function(e){

    if(window.pageYOffset > 1000){
        console.log("active");
    }
});

// aqui definimos que o scroll do mouse sera habilitado, depois que passar 1000px. 
// pageXOffset é o eixo vertical y
// mas se fosse em um caso real, teriamos que pegar a posicao de um elemento, por conta que pode mudar dependendo da tela