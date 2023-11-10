const prompt = require('prompt-sync')();

function prova() {
    const numCandidatos = prompt("Número de candidatos: ")
    let candidatosAprovados = 0

    for (let i = 1; i <= numCandidatos; i++) {
        const acertosPortugues = parseInt(prompt(`Questões de português acertadas pelo candidato ${i}: `))
        const acertosMatematica = parseInt(prompt(`Questões de matemática acertadas pelo candidato ${i}: `))
        const notaRedacao = parseFloat(prompt(`Nota do candidato ${i} na redação: `))

        if (acertosPortugues >= 0.8 * 50 && acertosMatematica >= 0.6 * 35 && notaRedacao >= 7) {
            candidatosAprovados++
        }
    }
    console.log(`O número de candidatos aprovados é: ${candidatosAprovados}`)
}

prova()
