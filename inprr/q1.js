const prompt = require('prompt-sync')();

let valorArrecadado = 0
let casasMultadas = 0
let numeroVeiculos = Number(prompt("Quantidade de veículos: (999 para encerrar): "))
while (numeroVeiculos !== 999) {
    if (numeroVeiculos > 2) {
        let multa = (numeroVeiculos - 2) * 12.89
        valorArrecadado += multa
        casasMultadas++
    }
    numeroVeiculos = Number(prompt("Quantidade de veículos: (999 para encerrar): "))
}
console.log(`Total arrecadado com as multas: R$ ${valorArrecadado.toFixed(2)}\nCasas multadas: ${casasMultadas}`)
