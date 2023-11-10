function verificaDecrescente(N, M, C, tabela) {
    for (let i = 1; i < N; i++) {
        if (tabela[i][C - 1] >= tabela[i - 1][C - 1]) {
            return 'N';
        }
    }
    return 'S';
}

const N = 4;
const M = 3;
const C = 1;
const tabela = [
    [90.0, 90.8, 90.2],
    [89.0, 88.1, 89.3],
    [88.0, 88.1, 90.4],
    [87.0, 87.2, 89.7]
];

const resultado = verificaDecrescente(N, M, C, tabela);
console.log(resultado);


