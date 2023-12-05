function* Id() {
    let id = 0; {
        while(true){
            yield id++;

        }
    }
}

let criarID = Id();

console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);

// um loop so que criado com id, podemos repetir ele varias vezes, gerendo um valor unico
// function* é uma função especial que pode ser pausada e produzir a sua execução posteriomente, permitindo que o código que o chama seja executado entre cada pausa.

console.log(criarID.next())

let resuId = Id;

console.log(resuId)