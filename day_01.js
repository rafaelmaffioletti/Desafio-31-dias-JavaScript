// 1. Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade anos".

let nome = "Rafael Maffioletti";
let idade = 37;

console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");

// 2. Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.

let preco = 20.00;
let desconto = 5.00;
let precoDesconto = preco - desconto;

console.log("O preço do protudo é de R$" + preco.toFixed(2) + " e o desconto é R$" + desconto.toFixed(2) + " O valor total do produto é de R$: " + precoDesconto.toFixed(2));

// 3. Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.

let comida = ["lasanha", "Churrasco", "Pizza"];

console.log(comida[1]);

// 4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.

let livro = {
  titulo: "A Sociedade do Anel (The Fellowship of the Ring)",
  autor: "J.R.R. Tolkien",
  ano: 1954
}

console.log("Livro: " + livro.titulo);
console.log("Autor: " + livro.autor);

// 5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".

let estaLogado = false;

estaLogado = true;

console.log("Status de login: " + estaLogado);

// 6. Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

let PI = 3.14
let raio = 5;
let area = PI * (raio * raio);

console.log("A área do círculo com raio " + raio + " é: " + area);