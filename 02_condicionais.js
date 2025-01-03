// 1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.

let hora = 23;

if (hora < 12) {
  console.log("Bom dia!")
} else if (hora < 18) {
  console.log("Boa tarde!")
} else {
  console.log("Boa noite!")
}

// 2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).

let mes = 1

switch (mes) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Fev");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Abr");
    break;
  case 5:
    console.log("Mai");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Ago");
    break;
  case 9:
    console.log("Set");
    break;
  case 10:
    console.log("Out");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dez");
    break;
  default:
    console("Mês inválido")

}

// 3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".

let idade = 18;

if (idade >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

// 4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".

let saldo = 20.00;
let msg = saldo > 0 ? "Saldo disponivel" : "Você precisa de um aumento.";

console.log(msg);

// 5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".

let numero = 1;

if (numero === 0) {
  console.log("Zero");
} else if (numero > 0) {
  console.log("Positivo");
} else {
  console.log("Negativo");
}

// 6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

let opcao = 1;

switch (opcao) {
  case 1:
    console.log("1 - Sacar");
    break;
  case 2:
    console.log("2 - Depositar");
    break;
  case 3:
    console.log("3 - Saldo");
    break;
}