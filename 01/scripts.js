const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function retirarPrimeiroUltimoItem(array) {
    //     array.reverse(); do item A
    array.splice(0, 1)
    array.splice(array.length - 1, 1, "Melão");
    const converterParaString = array.join(", ");
    console.log(converterParaString);
}
retirarPrimeiroUltimoItem(frutas);
