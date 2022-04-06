// String - Dados de texto
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "345678";

// citação
const citacao1 = "O Leo disse 'oi!'";
console.log(citacao1);

// concatenação (+)
const citacao2 = "Meu nome é "
const meuNome = "Leonardo";
console.log(citacao2 + meuNome);

// Pesquisar: template string ou template literal

// Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// comparar String
const cidade = "belo horizonte";
const input = "Belo Horizonte";
// console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // true

const senha2 = "minhaSenha123";
console.log(senha2.length); // 13 caracteres

