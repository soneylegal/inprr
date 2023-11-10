const prompt = require('prompt-sync')();

function maiorSequenciaA(N, sequencia) {
    let maxSequenciaA = 0;
    let sequenciaAtual = 0;

    for (let i = 0; i < N; i++) {
        if (sequencia[i] === 'a') {
            sequenciaAtual += 1;
            maxSequenciaA = Math.max(maxSequenciaA, sequenciaAtual);
        } else {
            sequenciaAtual = 0;
        }
    }

    return maxSequenciaA;
}

const N = parseInt(prompt("Digite o comprimento da sequência: "));
const sequencia = prompt("Digite a sequência de letras separadas por espaço: ").split(' ');

const resultado = maiorSequenciaA(N, sequencia);
console.log(resultado);