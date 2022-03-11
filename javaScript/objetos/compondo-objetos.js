const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678989",
    email: "andre@email.com",
    fones: ["55912345678", "55925814789"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011" 
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)