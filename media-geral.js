function calculaMedia(notasDaSala) {
    const total = notasDaSala.reduce((somaDasNotas, nota) => somaDasNotas + nota, 0);
    return total/notasDaSala.length;
}

const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

const mediaJS = calculaMedia(salaJS);
const mediaJava = calculaMedia(salaJava);
const mediaPython = calculaMedia(salaPython);

console.log(mediaJS);
console.log(mediaJava);
console.log(mediaPython);