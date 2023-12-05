const validaNomeUsuario = /[a-z][_e][-]d+\[0-9][3-16]/

console.log(validaNomeUsuario.test("Wagner"));
console.log(validaNomeUsuario.test("diogo"));
console.log(validaNomeUsuario.test("texeira)3"));