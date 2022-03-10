// parametros de função

//console.log(soma(2, 2));
//console.log(soma(245, 20));

// parametros x argumentos 

// ordem dos parametros
function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}
//console.log(nomeIdade(40, "Juliana"));

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

//console.log(multiplica(soma(4, 5), soma(3, 3)));

function comParametro(param){
    console.log(param);
}

comParametro();
