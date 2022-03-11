let notas = [10, 8, 7, 6]

let notasAtualizadas =  notas.map(nota => nota  == 10 ? nota : ++nota)

console.log(notasAtualizadas);