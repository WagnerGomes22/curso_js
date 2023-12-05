// function verificarNum(num) {
//     return new Promise((resolve, reject) => {
//         if (num == 2) {
//             resolve(console.log(`esse numero é: ${num}`));
//         } else {
//             reject(new Error("falhou"));
//         }
//     });
// }

// verificarNum(2);
// verificarNum(3);

let name = "wagner";

function usuario(name){
    return new Promise((resolve, reject) =>{
        if(name === "wagner"){
            resolve(console.log(`Bem vindo ${name}`))
        } else{
            reject(new Error("Falhou"));
        }
    });
}


// Bem vindo wagner
usuario("wagner");

// Falhou
usuario("diego");