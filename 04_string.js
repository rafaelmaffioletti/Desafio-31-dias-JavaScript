// 1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let nomeCompleto = ("Rafael Maffioletti");
console.log(nomeCompleto.slice(0, 6));

let primeiroNome = nomeCompleto.slice(0, 6);
console.log(primeiroNome);

// 2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let palavra = "JavaScript";

if (palavra.includes("Java")) {
  console.log("Personalizado");
} else {
  console.log("Não possui a informação desejada");
}

// 3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let frase = ("   Você sabe o que quer, mas foge do que precisa.   ")
let fraseAjustada = frase.trim().toUpperCase();

console.log(fraseAjustada);

// 4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.

let comunicado = ("Houve um erro no sistema.");
console.log(comunicado.replace("um erro", "uma correção"));

// 5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.

let msg = ("Eu amo JavaScript");

let frase1 = msg.slice(0, 2);
let frase2 = msg.slice(3, 6);
let frase3 = msg.slice(7, 17);

console.log(frase1);
console.log(frase2);
console.log(frase3);

// 6. Valide se um URL começa com `https://` e termina com `.com`.

let url = ("https://superangeloni.com.br/super.com.br")

if (url.startsWith("https://") && (url.endsWith(".com.br"))) {
  console.log("Url válida");
} else {
  console.log("Url invalida");
}