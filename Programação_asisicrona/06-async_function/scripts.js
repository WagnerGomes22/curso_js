// function somaDelay(a,b){
//     return new Promise (resolve => {
//         setTimeout(function(){
//             resolve(a+b)
//         }, 5000);
//     })
// }

// async function resSoma(a,b,c){

//    let x = somaDelay(a,b);

//    let y = c;

//    return await x + y;

// //    aqui acontece um delay na soma, basicamente ele resolve primeiro a soma de 1 + 2 = 3 depois faz 3 mais 3 que é x + y
//  }



// resSoma(1,2,3).then(value => console.log(value));


function somaDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a,b)
        }, 2000,
        )
    }
    )
};

async function resolv(a,b,c){

    let x = somaDelay(a,b)

    let y = c
    
    return await x + y
}

resolv(1,3,4).then(value => console.log(value));