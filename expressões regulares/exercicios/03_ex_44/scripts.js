const validarIP = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/

// o ip valido so vai ate 255 passando disso não é mais valido

console.log(validarIP.test("999.2.0.1")); false 
console.log(validarIP.test("123.255.2.2")); true