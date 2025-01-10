// 1. Crie uma função que calcule o dobro de um número.

function dobro(n1) {
  return n1 * 2;
};

let retornoFuncao = dobro(15);
console.log(retornoFuncao);

// 2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.

function saudacao(nome) {
  return `Olá ${nome} seja bem vindo`;
};

console.log(saudacao("Rafael"));

// 3. Crie uma função que receba dois números e retorne o maior deles.

function maiorNumero(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

let resultado = maiorNumero(10, 20);

console.log(resultado)

// 4. Implemente uma função que calcule a média de três números.

function media(n1, n2, n3) {
  return n1 + n2 + n3 / 3;

};

let n1 = 2;
let n2 = 5;
let n3 = 10;
let resultadoMedia = media(n1, n2, n3);

console.log(resultadoMedia.toFixed(2));

// 5. Crie uma função que receba um array de números e retorne a soma deles.

function somaArray(numeros) {
  return numeros.reduce((soma, numero) => soma + numero, 0);
}

let numeros = [1, 2, 3, 4, 5];
console.log(somaArray(numeros));


// 6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function contarCaracteres(frase) {
  return frase.length;
}

let texto = ""
console.log(contarCaracteres("Eu sou a vingança. Eu sou a noite. Eu sou o Batman!"));