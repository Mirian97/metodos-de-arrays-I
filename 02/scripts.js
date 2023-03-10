const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(arrayDeNomes, numero) {
    const metade = arrayDeNomes.length / 2;

    let grupo1 = "";
    let grupo2 = "";

    if (arrayDeNomes.length / 2 == numero) {
        grupo1 += arrayDeNomes.slice(0, metade);
        grupo2 += arrayDeNomes.slice(metade);

    } else {
        grupo1 += grupo1.concat(arrayDeNomes.slice(0, numero));
        grupo2 += grupo2.concat(arrayDeNomes.slice(numero));
    }
    console.log("Grupo 1: ", grupo1);
    console.log("Grupo 2: ", grupo2);
}
// dividirGrupos(nomes, tamanhoDoGrupo);

// imprime os resultados colados,um,no,outro.

function dividirGruposPorNumeros(array, numero) {
    let numeroDoGrupo = 0;
    for (let i = 0; i < array.length; i += numero) {
        const grupo = array.slice(i, numero + i);
        numeroDoGrupo++;
        console.log(`Grupo ${numeroDoGrupo}: ${grupo.join(", ")}`);
    }
}

dividirGruposPorNumeros(nomes, tamanhoDoGrupo);
