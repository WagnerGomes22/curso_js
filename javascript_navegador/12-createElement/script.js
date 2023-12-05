let lista = document.createElement('ul');

for(let i = 0; i < 5; i++){

    let item = document.createElement('li')

    let texto = document.createTextNode('Teste lista' + i)

    item.appendChild(texto);

    lista.appendChild(item);
} 

let container = document.getElementById('container')

container.appendChild(lista)

// na solução acima criamos uma lista