const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(lista, paciente) {
    const index = lista.indexOf(paciente);
    const endIndex = lista.length;
    lista.splice(index, 1);
    lista.splice(endIndex, 0, paciente);
    console.log(lista);
}
agendarPaciente(pacientes, pacientes[5]);



function atenderPaciente(lista) {
    while (lista.length > 0) {
        lista.splice(0, 1);
    }
    console.log(lista);
}
atenderPaciente(pacientes);



function cancelarAtendimento(lista, paciente) {
    const index = lista.indexOf(paciente);
    lista.splice(index, 1);
    console.log(lista);
}
cancelarAtendimento(pacientes, pacientes[2])