const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678989",
    email: "andre@email.com",
    fones: ["55912345678", "55925814789"],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "Filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "Filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

let relatorio = "";
for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    } else {
        relatorio += `
        ${info} ==> ${clinte[info]}
        `
    }   
}

console.log(relatorio)
