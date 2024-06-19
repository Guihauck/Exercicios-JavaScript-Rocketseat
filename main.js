// 1.Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello World!");


// 2.Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let number1, number2;

number1 = 2;
number2 = 4;

result = number1 + number2;

console.log(result);

// 3.Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let isNumber = 2;

if (typeof isNumber === "number") {
  console.log("Isto é um número!");
} else {
  console.log(`Isto é outro tipo de dado ${typeof isNumber}`);
}

// 4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isString = 3;

if (typeof isString === "string") {
  console.log("O dado é tipo String, verdadeiro!");
} else {
  console.log(`O dado é outro, tipo ${typeof isString}`);
}

// 5.Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let isBoolean = false;

if (typeof isBoolean == "boolean") {
  console.log(`Verdadeiro o dado é: ${typeof isBoolean}`);
} else {
  console.log(`Falso, o dado é: ${typeof isBoolean}`);
}

// 6.Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let sub1, sub2;

sub1 = 12;
sub2 = 10;

let resultSub = sub1 - sub2;

console.log(resultSub);

// 7.Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let mult1, mult2;

mult1 = 12;
mult2 = 10;

let resultMult = mult1 * mult2;

console.log(resultMult);

// 8.Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let div1, div2;

div1 = 12;
div2 = 10;

let resultDiv = div1 / div2;

console.log(resultDiv);

// 9.Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let numberPar = 313;

if (numberPar % 2 == 0) {
  console.log(`Número é par: ${numberPar}`);
} else {
  console.log(`Número é ímpar: ${numberPar}`)
}

// 10.Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let numberImpar = 15;

if (numberImpar % 2 > 0) {
  console.log(`O número ${numberImpar} é ímpar.`);
} else {
  console.log(`O número ${numberImpar} não é ímpar.`);
}