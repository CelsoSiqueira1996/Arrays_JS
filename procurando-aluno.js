const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaBidimensional = [alunos, medias];

function exibeNomeENota (aluno) {
    if(listaBidimensional[0].includes(aluno)) {
        //const alunos = listaBidimensional[0];
        //const medias = listaBidimensional[1];

        const [alunos, medias] = listaBidimensional;

        const indice = alunos.indexOf(aluno);

        return medias[indice];
    }
    return `Aluno ${aluno} não encontrado.`;
}

console.log(exibeNomeENota('Celso'));
console.log(exibeNomeENota('João'));
console.log(exibeNomeENota('Ana'));
console.log(exibeNomeENota('Caio'));
console.log(exibeNomeENota('Juliana'));
