// 1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.

let cores = ["Vermelho", "Azul", "Preto"];
cores.push("Preto");

console.log(cores);

// 2. Use um loop para exibir todos os itens de um array de compras.

let compras = ["Macarrão", "Feijão", "Arroz", "Carne", "Frango", "Salada"];

for (let i = 0; i < compras.length; i++) {
  console.log(compras[i]);
};

// 3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.

let numeros = [10, 20, 30, 40, 50];
let novoNumeros = numeros.slice(3, 5);

console.log(`numeros: ${novoNumeros}`);

// 4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.

let tarefas = ["Varrer", "Lavar", "Secar"];
tarefas.shift();

console.log(tarefas);

// 5. Use `splice` para substituir o terceiro item de um array por "Substituído".

compras.splice(3, 1, "Suino");
console.log(compras);

// 6. Transforme um array de palavras em uma frase completa usando `join`.

let palavras = ["Eu", "adoro", "programar", "em", "JavaScript"];
let frase = palavras.join(" ");

console.log(frase);