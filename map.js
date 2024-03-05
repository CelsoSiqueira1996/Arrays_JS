const notas = [10, 9.5, 8, 7, 6];

const notasAlteradas = notas.map((nota) => {
    nota += 1;
    if( nota > 10) {
        nota = 10;
    }
    return nota;
});

console.log(notasAlteradas);
console.log(notas);

const notasAlteradas1 = notas.map((nota) => ((nota += 1) > 10)? 10 : nota); //esse formato substitui o return 
//(não precisa explicitar)

console.log(notasAlteradas1);
console.log(notas);
