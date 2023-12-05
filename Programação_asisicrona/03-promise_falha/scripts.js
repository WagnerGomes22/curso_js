let p = Promise.resolve(new Error(console.log("Não deu certo")))

console.log("laalala")

p.then(value => console.log(value))
.catch(reason => console.log("falho" + reason));
