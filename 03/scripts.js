const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function grupoDeCarros(arrayDeCarros, posição) {
    const captureTresCarros = arrayDeCarros.slice(posicao, posição + 3);
    console.log(captureTresCarros);
}

grupoDeCarros(nomes, posicao);

