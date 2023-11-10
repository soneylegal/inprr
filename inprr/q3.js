const prompt = require('prompt-sync')();
function conferir(digito) {
    let string = digito.replace('.', '').replace('.', '').replace('-', '');
    let somaMaiores = 0;
    let maiorDaChave = 0;

    for (let i = 0; i <= 2; i++) {
        if (string[i] > maiorDaChave) {
            maiorDaChave = Number(string[i]);
        }
    }
    somaMaiores += maiorDaChave;
    maiorDaChave = 0;
    for (let i = 3; i <= 5; i++) {
        if (string[i] > maiorDaChave) {
            maiorDaChave = Number(string[i]);
        }
    }
    somaMaiores += maiorDaChave;
    maiorDaChave = 0;
    for (let i = 6; i <= 8; i++) {
        if (string[i] > maiorDaChave) {
            maiorDaChave = Number(string[i]);
        }
    }
    somaMaiores += maiorDaChave;
    if (somaMaiores % 10 === Number(string[9])) {
        console.log('VALIDO');
    } else {
        console.log('INVALIDO');
    }
}

conferir('001.290.611-6')