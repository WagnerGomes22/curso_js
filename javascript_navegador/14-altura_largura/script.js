let larguraAltura = document.querySelector(".Titulo-Secundario");

console.log('larggura ' + larguraAltura.offsetWidth);  //  Considera as bordas
console.log('Altura ' + larguraAltura.offsetHeight);

console.log('larggura ' + larguraAltura.clientWidth); // Nao considera
console.log('Altura ' + larguraAltura.clientHeight);

// com a propiedade offset, conseguimos descobrir a largura e a altura do elemento
 