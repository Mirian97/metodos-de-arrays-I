const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function listaAtualizada(lista, operacao, nome) {
    const index = lista.indexOf(nome);
    if (operacao === "agendar") {
        const endIndex = lista.length;
        lista.splice(index, 1)
        lista.splice(endIndex, 0, nome);

    } else if (operacao === "atender") {
        lista.splice(index, 1);
    }
    console.log(lista);
}

listaAtualizada(pacientes, "agendar", pacientes[4]);
