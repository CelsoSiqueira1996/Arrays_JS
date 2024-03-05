const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

for(let indice = 0; indice < notas.length; indice++) {
    somaNotas += notas[indice];
}

const media = somaNotas/notas.length;

console.log(`A média das notas é ${media}.`);