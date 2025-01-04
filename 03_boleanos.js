// 1. Verifique se um número é maior que 10 e menor que 20.

let numero = 15;

if (numero > 10 && numero < 20) {
  console.log(true);
} else {
  console.log(false)
}

// 2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = 18;
let podeVotar = true;

if (podeVotar && idade >= 16) {
  console.log("Pode votar");
} else {
  console.log("Não pode voatar");
}

// 3. Use `&&` e `||` para criar um sistema de login onde um usuário pode entrar com email **ou** nome de usuário, mas precisa fornecer uma senha válida.

let email = true;
let usuario = false;
let senhaValida = true;

if ((email || usuario) && senhaValida) {
  console.log("Acesso liberado");
} else {
  console.log("Acesso negado");
}

/* 4. Implemente um sistema de notas onde:
    - Notas >= 90: "Aprovado com A"
    - Notas >= 70 e < 90: "Aprovado com B"
    - Notas < 70: "Reprovado". */

let nota = 90

if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
  console.log("Aprovado com B");
} else {
  console.log("Reprovado");
}

/* 5. Crie uma variável `saldo` e verifique:
    - Se `saldo > 0`: Mostre "Saldo positivo".
    - Se `saldo === 0`: Mostre "Sem saldo".
    - Caso contrário, mostre "Saldo negativo". */

let saldo = 0;

if (saldo > 0) {
  console.log("Saldo positivo");
} else if (saldo === 0) {
  console.log("Sem Saldo");
} else {
  console.log("Saldo negativo");
}

// 6. Use o operador `!` para verificar se uma luz está apagada e ligue-a.

let luzLigada = true;

if (!luzLigada) {
  console.log("Ligue a luz")
} else {
  console.log("Apague a luz");
}
