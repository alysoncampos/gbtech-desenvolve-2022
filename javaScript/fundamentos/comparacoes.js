// ==  comparação implicita (compara só o valor)

let numero = 5;
let texto = "5";
// console.log(numero == texto);

// === (compara o valor e o tipo)
// console.log(numero === texto);//false

// // typeof
// console.log(typeof numero);
// console.log(typeof texto);

// conversão explicita
Number();
String();
// console.log(numero === Number(texto));//true

console.log(numero == texto);
console.log(numero === texto);
console.log(numero != texto);
console.log(numero !== texto);