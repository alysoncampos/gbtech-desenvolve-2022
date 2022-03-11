const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678989",
    email: "andre@email.com" 
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

chaves.forEach(element => console.log(cliente[element]));
