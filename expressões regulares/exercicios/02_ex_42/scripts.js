const validarID = /\d+ID\b/;

// o b garante que a string termine com ID, indicando que tem que termina com ID

console.log(validarID.test("3232id"));
console.log(validarID.test("534ID"));