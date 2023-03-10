const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontrarDono(usuarios, pet) {
    let encontrado = false;
    for (let item of usuarios) {
        if (item.pets.includes(pet)) {
            encontrado = true;
            console.log(`O dono(a) do(a) ${pet} é o(a) ${item.nome}`);
            break;
        }
    }
    if (!encontrado) {
        console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
    }
}

encontrarDono(usuarios, "Max");