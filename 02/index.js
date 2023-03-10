const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(arrayDeNomes, numero) {

    let grupo1 = arrayDeNomes.slice(0, numero);
    let grupo2 = arrayDeNomes.slice(numero);

    console.log("Grupo 1: ", grupo1.join(", "));
    console.log("Grupo 2: ", grupo2.join(", "));
}

dividirGrupos(nomes, tamanhoDoGrupo);