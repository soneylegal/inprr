const prompt = require("prompt-sync")()

let dias = parseInt(prompt("Digite o número de dias: "))
let visualizacoesAnterior = -1
let visualizacoesDia = 0
let resultado = "S"
for (i = 0; i < dias; i++) {
    visualizacoesDia = prompt("Digite as views: ")
    if (visualizacoesAnterior >= visualizacoesDia) {
        resultado = "N";
        break;
    }
    visualizacoesAnterior = visualizacoesDia
}
console.log(resultado)
