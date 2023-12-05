// const validarDataNasc = /[0-12][2][/][0-30][2][/][1980-2004]{4}/;



// validador de data de nascimento, seguindo certinho o formato DD/MM/AAAA. 
// DD é um número de 01 a 31, MM é de 01 a 12 e 
// AAAA é de 1920 a 2020.



const validarDatasNasc = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19[2-9][0-9]|20[01][0-9]|2020)$/;

console.log(validarDatasNasc.test("23/08/2004"));
console.log(validarDatasNasc.test("223/08/2004"));
console.log(validarDatasNasc.test("23/8/2004"));
