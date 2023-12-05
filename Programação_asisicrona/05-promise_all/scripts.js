const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 5000)
});

const p2 = Promise.resolve(5);

const p3 = new Promise((resolve, reject) => {
    resolve(4);
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));

// essas promises so seram resolvidadas quando o p1 for resolvido depois de 5 segundos. e o array vai ser resolvido na ordem que foi passado 