const readlineSync = require('readline-sync');

// 1. Use um loop `for` para imprimir os números de 1 a 10 no console.

let numero = 10;

for (let i = 0; i <= numero; i++) {
  console.log(`numero ${i}`);
};

// 2. Crie uma lista de nomes e use um `for` para exibir cada nome.

let nomes = ["Rafael", "Adriano", "Albertina", "Edevaldo", "Jucinara", "Rafinha"];

for (let i = 0; i <= nomes.length; i++) {
  console.log(nomes[i]);
}

// 3. Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let numeroArray = [1, 2, 3, 4, 10, 11, 12, 13];

for (let i = 0; i <= numeroArray.length; i++) {
  if (numeroArray[i] > 10) break;
  console.log(`numero ${numeroArray[i]}`);
}

// 4. Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.

let = numerow = 10;

while (numerow >= 0) {

  if (numerow == 0) {
    console.log("Chegou o dia do lançamento");
  } else {
    console.log(`Faltam ${numerow} dias para o lançamento`);
  }
  numerow--;
}

// 5. Com um `do...while`, simule um caixa eletrônico pedindo a senha até que ela esteja correta.

/*
let senha = 1234;
let tentativa;

do {
  tentativa = prompt("Digite sua senha:");
} while (tentativa != senha);

console.log("Senha correta!")
*/

// 6. Escreva um loop que calcula o fatorial de um número (ex: 5! = 5*4*3*2*1).

let fatorial = 1;
let i = 5;
while (i > 1) {
  fatorial *= i;
  i--;
}

console.log(fatorial);