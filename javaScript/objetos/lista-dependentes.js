const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678989",
    email: "andre@email.com",
    fones: ["55912345678", "55925814789"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)
