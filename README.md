# 01/01 - Variáveis

### **📌 Introdução**

Bem-vindo ao **primeiro dia do desafio!** 🎉

Primeiramente, gostaria de te dar os parabéns por dar esse passo rumo ao seu desenvolvimento pessoal e profissional, e realmente espero que esse desafio agregue muito na sua vida.

Serão 31 dias aprendendo programação, totalmente de graça, cada dia um conceito novo, explicando de um jeito fácil de entender e com vários exercícios práticos para você praticar, pois afinal, a programação é uma habilidade que só aprender fazendo.

Sem mais enrolação, bora pro código!

---

### **📚 O Que é uma Variável?**

Hoje vamos falar sobre **variáveis**, a base de qualquer programa em qualquer linguagem de programação. Se você já ouviu alguém dizer que uma variável é "como uma caixa onde você guarda coisas", você já está no caminho certo!

As variáveis são essenciais porque permitem que armazenemos dados que podemos usar e modificar ao longo do programa. E aqui no **JavaScript**, elas são muito flexíveis! Vamos mergulhar nesse conceito? 🚀

Uma variável é um espaço na memória do computador onde você pode **armazenar informações**. Essa informação pode ser:

- Um número 🧮
- Uma palavra ou frase 📜
- Uma lista 📋
- Ou até mesmo algo mais complexo, como objetos e funções!

---

### **🛠️ Como Declarar Variáveis no JavaScript?**

No JavaScript, usamos as palavras-chave `var`, `let`, ou `const` para declarar uma variável. Aqui está como elas funcionam:

```jsx
// Declarando uma variável com let
let nome = "João"; // Você pode mudar o valor depois

// Declarando uma variável com const
const idade = 25; // O valor não pode ser alterado

// Declarando uma variável com var (não recomendado, mas funciona)
var cidade = "São Paulo";
```

---

### **🔍 Tipos de Dados em Variáveis**

No JavaScript, as variáveis podem armazenar diferentes tipos de dados. Vamos ver os principais:

**Número** (`number`):

```jsx
let idade = 30;
```

**Texto** (`string`):

```jsx
let nome = "Maria";
```

**Booleano** (`boolean`):

```jsx
let estaLogado = true; // ou false
```

**Lista (Array)**:

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
```

**Objeto**:

```jsx
let pessoa = {
  nome: "Carlos",
  idade: 28,
};
```

---

### **💡 Exemplos Práticos**

Vamos criar algumas variáveis e usar em diferentes situações:

**Cálculos Simples**:

```jsx
let preco = 50;
let desconto = 10;
let precoFinal = preco - desconto;

console.log(precoFinal); // Saída: 40
```

**Juntando Texto**:

```jsx
let saudacao = "Olá";
let nome = "Ana";

console.log(saudacao + ", " + nome + "!"); // Saída: Olá, Ana!
```

**Acessando Dados em Arrays**:

```jsx
let cores = ["Azul", "Vermelho", "Verde"];

console.log(cores[1]); // Saída: Vermelho
```

---

### **🔎 Diferenças Entre `var`, `let` e `const`**

No JavaScript, você pode declarar variáveis usando `var`, `let`, ou `const`. Apesar de parecerem semelhantes, elas têm comportamentos diferentes, principalmente em relação ao **escopo** e à possibilidade de alterar seus valores.

**1. `var`: O "Velho" JavaScript**

- Declarada antes do ES6, `var` foi a única maneira de criar variáveis por muito tempo.
- **Escopo:** Global ou local dentro de funções. Ignora blocos (`if`, `for`, etc.).
- **Reatribuição:** Pode ser reatribuída e redeclarada no mesmo escopo.

```jsx
if (true) {
  var nome = "Pedro";
}
console.log(nome); // Funciona, mesmo fora do bloco
```

⚠️ **Problemas com `var`:**

- Como ignora blocos, pode causar comportamentos inesperados, especialmente em loops.

**2. `let`: O "Atualizado"**

- Introduzido no ES6, é recomendado para variáveis cujo valor pode mudar.
- **Escopo:** Local ao bloco onde foi declarada.
- **Reatribuição:** Pode ser reatribuída, mas não redeclarada no mesmo escopo.

```jsx
if (true) {
  let idade = 25;
  console.log(idade); // Funciona aqui
}
console.log(idade); // Erro: idade não está definida
```

**3. `const`: O "Imutável"**

- Também introduzido no ES6, é usado para variáveis que **não mudam de valor**.
- **Escopo:** Local ao bloco onde foi declarada.
- **Reatribuição:** Não pode ser reatribuída, mas se for um objeto ou array, seus valores internos podem ser alterados.

```jsx
const PI = 3.14;
PI = 3.15; // Erro: Não pode reatribuir
```

Para objetos e arrays:

```jsx
const frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); // Funciona
console.log(frutas); // ["Maçã", "Banana", "Laranja"]
```

### **💡 Quando Usar Cada Um?**

- **`let`:** Quando você precisa de uma variável cujo valor será alterado.
- **`const`:** Para valores constantes ou estruturas que não serão reatribuídas.
- **`var`:** Evite, a menos que precise de compatibilidade com códigos antigos.

---

### **🔗 Dicas Importantes**

- Sempre escolha nomes de variáveis que sejam claros e descritivos.
  ```jsx
  let x = 10; // Ruim ❌
  let precoProduto = 10; // Bom ✅
  ```
- **Cuidado com letras maiúsculas e minúsculas!** O JavaScript diferencia `preco` de `Preco`.

---

### **🎯 Exercícios Práticos**

Agora é a sua vez! 💪 Resolva os exercícios abaixo:

1. Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".
2. Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.
3. Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.
4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.
5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".
6. Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

---

### **🚀 Conclusão**

Parabéns por completar o primeiro dia do desafio! 🎉 Agora você já sabe o que são variáveis, como declará-las e usá-las no JavaScript.

Amanhã vamos aprender sobre **Estruturas Condicionais** e como o código pode tomar decisões. Te vejo lá! 👋

# 02/01 - Condicionais

Realizado o desafio 02 e alguns exercícios de aplicação de camada.

### **📌 Introdução**

Seja bem-vindo ao **segundo dia do desafio!** 🎉 Hoje vamos explorar as **Estruturas Condicionais**, que são a forma de fazer o código tomar decisões com base em condições.

Pense assim: na vida, estamos sempre avaliando condições para agir. Por exemplo:

- **Se** está chovendo, **então** levo um guarda-chuva.
- **Caso contrário**, saio sem ele.

Na programação, é exatamente assim! Vamos aprender a usar o famoso `if`, o útil `else`, e o versátil `switch`. Vamos lá? 🚀

---

### **📚 O Que são Estruturas Condicionais?**

As estruturas condicionais permitem que o código **execute diferentes blocos de instruções** dependendo de condições específicas.

No JavaScript, as principais formas de tomar decisões são:

1. **`if` e `else`:** Executa um bloco de código se uma condição for verdadeira, e outro bloco caso contrário.
2. **`else if`:** Permite testar várias condições.
3. **`switch`:** Ideal para quando você precisa verificar muitas possibilidades de forma mais limpa.

---

### **🔍 `if`, `else if`, e `else`**

Vamos começar com a estrutura mais básica:

```jsx
let hora = 10;

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}
```

📌 **Explicação:**

1. Se `hora` for menor que 12, imprime "Bom dia!".
2. Caso contrário, se `hora` for menor que 18, imprime "Boa tarde!".
3. Se nenhuma das condições acima for verdadeira, imprime "Boa noite!".

---

### **🔄 `switch`**

O `switch` é útil quando você precisa testar **vários casos diferentes** para uma mesma variável.

```jsx
let diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Outro dia");
}
```

📌 **Explicação:**

- Cada `case` é uma condição que verifica o valor da variável `diaSemana`.
- O `default` é executado se nenhum dos casos for verdadeiro.
- O `break` impede que o código continue executando outros casos.

---

### **⚡ Operador Ternário**

Se você precisa fazer uma decisão simples, o operador ternário é perfeito. Ele é como um `if` resumido:

```jsx
let idade = 18;
let mensagem = idade >= 18 ? "Pode entrar! 🎉" : "Entrada proibida! ❌";

console.log(mensagem);
```

📌 **Explicação:**

- Se a condição `idade >= 18` for verdadeira, retorna "Pode entrar!".
- Caso contrário, retorna "Entrada proibida!".

---

### **💻 Exemplos Práticos**

- **Verificando Par ou Ímpar:**

```jsx
let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}
```

- **Classificando Notas:**

```jsx
let nota = 85;

if (nota >= 90) {
  console.log("Aprovado com A! 🏆");
} else if (nota >= 70) {
  console.log("Aprovado com B.");
} else {
  console.log("Reprovado. 😔");
}
```

- **Escolhendo uma Ação com `switch`:**

```jsx
let opcao = "pagar";

switch (opcao) {
  case "pagar":
    console.log("Processando pagamento...");
    break;
  case "cancelar":
    console.log("Cancelando pedido...");
    break;
  default:
    console.log("Opção inválida!");
}
```

---

### **🛠️ Dicas Importantes**

- **Coloque condições mais específicas primeiro:**
  ```jsx
  if (nota >= 90) {
    // Específico
  } else if (nota >= 50) {
    // Geral
  }
  ```
- **Use `switch` para evitar muitos `else if`:**
  Quando há muitas opções baseadas em um único valor, o `switch` torna o código mais legível.
- **Evite duplicar código:**
  Tente organizar as condições de forma a evitar repetições desnecessárias.

---

### **🎯 Exercícios Práticos**

Agora é sua vez! Resolva os exercícios abaixo:

1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.
2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

---

### **🚀 Conclusão**

Parabéns por concluir o segundo dia do desafio! 🎉 Agora você já sabe como tomar decisões no código usando **Estruturas Condicionais**.

Amanhã, vamos explorar um novo conceito: **Tipos de Dados - Booleanos**. Vamos continuar avançando juntos! 👋

# 03/01 - Boleanos

Realizado o desafio 03 e alguns exercícios de aplicação de camada.

### **📌 Introdução**

Seja bem-vindo ao **terceiro dia do desafio!** 🎉 Hoje vamos falar sobre os **tipos de dados booleanos**, um conceito simples, mas extremamente poderoso na programação.

Os valores booleanos são como interruptores: **ligado (true)** ou **desligado (false)**. Eles estão em todos os lugares, ajudando o código a tomar decisões, controlar loops, validar entradas e muito mais. Vamos entender como eles funcionam e como usá-los no JavaScript. 🚀

---

### **📚 O Que São Valores Booleanos?**

Um valor booleano só pode ter dois estados:

- **`true`**: Representa verdadeiro.
- **`false`**: Representa falso.

Eles são usados principalmente em **condições** para determinar o que o código deve fazer.

💡 **Exemplo no mundo real:**

- **Está chovendo?** _true_
- **Você está logado?** _false_
- **A luz está acesa?** _true_

---

### **🔍 Comparações e Operadores Relacionais**

Os valores booleanos muitas vezes são gerados a partir de **comparações**. Aqui estão os operadores mais comuns:

| Operador | Descrição         | Exemplo   | Resultado |
| -------- | ----------------- | --------- | --------- |
| `===`    | Igualdade estrita | `5 === 5` | `true`    |
| `!==`    | Diferença estrita | `5 !== 3` | `true`    |
| `<`      | Menor que         | `3 < 5`   | `true`    |
| `>`      | Maior que         | `5 > 3`   | `true`    |
| `<=`     | Menor ou igual    | `3 <= 3`  | `true`    |
| `>=`     | Maior ou igual    | `5 >= 5`  | `true`    |

---

### **🔄 Operadores Lógicos**

Os operadores lógicos permitem combinar ou inverter valores booleanos:

| Operador | Descrição    | Exemplo         | Resultado   |
| -------- | ------------ | --------------- | ----------- |
| `&&`     | "E" lógico   | `true && false` | `false`     |
| `        |              | `               | "OU" lógico |
| `!`      | "NÃO" lógico | `!true`         | `false`     |

💡 **Exemplo:**

```jsx
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir 🚗");
} else {
  console.log("Não pode dirigir ❌");
}
```

📌 **Explicação:**

- O código verifica duas condições ao mesmo tempo: se a idade é maior ou igual a 18 **e** se a pessoa tem carteira.

---

### **💻 Exemplos Práticos**

- **Verificando Login:**

```jsx
let estaLogado = true;

if (estaLogado) {
  console.log("Bem-vindo de volta! 👋");
} else {
  console.log("Por favor, faça login. 🔒");
}
```

- **Classificando Notas:**

```jsx
let nota = 85;

if (nota >= 90) {
  console.log("Nota A 🏆");
} else if (nota >= 70 && nota < 90) {
  console.log("Nota B 👍");
} else {
  console.log("Reprovado 😢");
}
```

- **Negação com `!`:**

```jsx
let luzAcesa = false;

if (!luzAcesa) {
  console.log("A luz está apagada. 💡");
}
```

- **Combinação de Condições:**

```jsx
let saldo = 100;
let temCartao = true;

if (saldo > 0 || temCartao) {
  console.log("Compra aprovada 🛒");
} else {
  console.log("Compra negada ❌");
}
```

---

### **🛠️ Dicas Importantes**

- **Cuidado com conversões automáticas (truthy e falsy):** No JavaScript, alguns valores são interpretados como `true` ou `false`, mesmo que não sejam booleanos.

| Valor                                 | Interpretação |
| ------------------------------------- | ------------- |
| `0`, `""`, `null`, `undefined`, `NaN` | `false`       |
| Qualquer outro valor                  | `true`        |

💡 **Exemplo:**

```jsx
if (0) {
  console.log("Isso nunca será executado!");
}
if ("Texto") {
  console.log("Isso será executado!");
}
```

- **Use parênteses para clareza:** Sempre agrupe condições com `&&` e `||` usando parênteses para evitar confusão.

```jsx
if ((idade >= 18 && temCarteira) || temAcompanhante) {
  console.log("Pode entrar!");
}
```

---

### **🎯 Exercícios Práticos**

Agora é a sua vez! Resolva os exercícios abaixo:

1. Verifique se um número é maior que 10 e menor que 20.
2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
3. Use `&&` e `||` para criar um sistema de login onde um usuário pode entrar com email **ou** nome de usuário, mas precisa fornecer uma senha válida.
4. Implemente um sistema de notas onde:
   - Notas >= 90: "Aprovado com A"
   - Notas >= 70 e < 90: "Aprovado com B"
   - Notas < 70: "Reprovado".
5. Crie uma variável `saldo` e verifique:
   - Se `saldo > 0`: Mostre "Saldo positivo".
   - Se `saldo === 0`: Mostre "Sem saldo".
   - Caso contrário, mostre "Saldo negativo".
6. Use o operador `!` para verificar se uma luz está apagada e ligue-a.

---

### **🚀 Conclusão**

Parabéns por completar o terceiro dia do desafio! 🎉 Agora você já sabe o que são valores booleanos, como usá-los, e como combiná-los com operadores lógicos para tomar decisões no seu código.

Amanhã, vamos aprender sobre **Tipos de Dados - Strings**. Te vejo lá! 👋

Ficou perfeito, mantenha esse mesmo padrão de qualidade, agora para o próximo tópico, não esqueça de abordar tudo que é necessário para o aluno ter uma absorção completa de todo o conteúdo

# 04/01 - Sting

Realizado o desafio 04e alguns exercícios de aplicação de camada.

### **📌 Introdução**

Bem-vindo ao **quarto dia do desafio!** 🎉 Hoje vamos mergulhar nas **strings**, um dos tipos de dados mais usados na programação.

As strings representam **sequências de caracteres** (letras, números, símbolos, etc.) e estão presentes em quase todo programa, desde mensagens de erro até nomes de usuários e textos de interface.

Você aprenderá como manipular strings, concatená-las, extrair partes, e aplicar métodos úteis do JavaScript. Vamos lá? 🚀

---

### **📚 O Que é uma String?**

Uma string é basicamente **um texto entre aspas**. No JavaScript, você pode usar três tipos de aspas:

- **Aspas simples** `'Texto'`
- **Aspas duplas** `"Texto"`
- **Template literals (crase)** `Texto`

💡 **Exemplo:**

```jsx
let nome = "João"; // Aspas duplas
let sobrenome = "Silva"; // Aspas simples
let saudacao = `Olá, ${nome}!`; // Template literal
```

📌 **Dica:** Use `template literals` (crase) quando precisar incluir variáveis ou expressões diretamente no texto.

---

### **🔍 Principais Operações com Strings**

- **Concatenar Strings:** Unir textos usando o operador `+` ou template literals:

```jsx
let nome = "Ana";
let saudacao = "Olá, " + nome + "!"; // Usando +
let saudacao2 = `Olá, ${nome}!`; // Usando template literals
console.log(saudacao); // Saída: Olá, Ana!
```

- **Acessar Caracteres:** Cada caractere de uma string tem um índice, começando em `0`:

```jsx
let palavra = "Programação";
console.log(palavra[0]); // Saída: P
console.log(palavra[4]); // Saída: a
```

- **Obter o Tamanho da String:**

```jsx
let texto = "JavaScript";
console.log(texto.length); // Saída: 10
```

---

### **🔄 Métodos Úteis para Manipular Strings**

| Método          | Descrição                              | Exemplo                              | Saída        |
| --------------- | -------------------------------------- | ------------------------------------ | ------------ |
| `toUpperCase()` | Transforma tudo em maiúsculas          | `"abc".toUpperCase()`                | `"ABC"`      |
| `toLowerCase()` | Transforma tudo em minúsculas          | `"ABC".toLowerCase()`                | `"abc"`      |
| `trim()`        | Remove espaços do início e do fim      | `" texto ".trim()`                   | `"texto"`    |
| `includes()`    | Verifica se contém um texto específico | `"JavaScript".includes("Script")`    | `true`       |
| `startsWith()`  | Verifica se começa com um texto        | `"JavaScript".startsWith("Java")`    | `true`       |
| `endsWith()`    | Verifica se termina com um texto       | `"JavaScript".endsWith("Script")`    | `true`       |
| `slice()`       | Extrai uma parte da string             | `"JavaScript".slice(0, 4)`           | `"Java"`     |
| `replace()`     | Substitui parte do texto               | `"Olá, João".replace("João", "Ana")` | `"Olá, Ana"` |

---

### **💻 Exemplos Práticos**

- **Formatando Texto:**

```jsx
let nome = "   ana silva   ";
console.log(nome.trim().toUpperCase()); // Saída: ANA SILVA
```

- **Validando Strings:**

```jsx
let email = "usuario@gmail.com";
if (email.includes("@")) {
  console.log("Email válido!");
} else {
  console.log("Email inválido!");
}
```

- **Cortando Partes de um Texto:**

```jsx
let frase = "Eu amo programação!";
let palavra = frase.slice(6, 16);
console.log(palavra); // Saída: programação
```

- **Substituindo Palavras:**

```jsx
let mensagem = "Olá, João!";
let novaMensagem = mensagem.replace("João", "Maria");
console.log(novaMensagem); // Saída: Olá, Maria!
```

- **Verificando Começo e Fim:**

```jsx
let site = "www.exemplo.com";
console.log(site.startsWith("www")); // Saída: true
console.log(site.endsWith(".com")); // Saída: true
```

---

### **🛠️ Dicas Importantes**

- **Strings são imutáveis:**
  Você não pode alterar diretamente um caractere de uma string.
  ```jsx
  let texto = "Olá";
  texto[0] = "A"; // Não funciona
  console.log(texto); // Saída: Olá
  ```
- **Use métodos encadeados para manipulação eficiente:**
  ```jsx
  let texto = "  Olá, mundo!  ";
  console.log(texto.trim().toUpperCase()); // Saída: OLÁ, MUNDO!
  ```

---

### **🎯 Exercícios Práticos**

1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
6. Valide se um URL começa com `https://` e termina com `.com`.

---

### **🚀 Conclusão**

Parabéns por completar o quarto dia do desafio! 🎉 Agora você já sabe manipular strings no JavaScript e usar métodos úteis para trabalhar com textos.

Amanhã, vamos explorar um dos conceitos mais importantes: **Laços de Repetição**. Você vai aprender a automatizar tarefas repetitivas no seu código. Até lá! 👋

# 05/01 - Loops

### **📌 Introdução**

Bem-vindo ao **quinto dia do desafio!** 🎉 Hoje vamos explorar os **Laços de Repetição**, ferramentas poderosas que nos permitem **executar o mesmo bloco de código várias vezes**.

Imagine que você precisa imprimir os números de 1 a 100. Você não quer escrever 100 linhas de código, certo? É aqui que os loops entram em cena, salvando tempo e esforço. Vamos aprender como usar os principais loops no JavaScript: `for`, `while` e `do...while`. 🚀

---

### **📚 O Que são Laços de Repetição?**

Laços de repetição, ou **loops**, são usados para executar um bloco de código várias vezes, com base em uma condição.

💡 **Exemplo no mundo real:**

- Enviar uma mensagem para todos os convidados de uma festa.
- Contar quantos itens existem em uma lista de compras.

---

### **🔍 Tipos de Loops no JavaScript**

### **1. `for`**

O loop `for` é usado quando você sabe exatamente quantas vezes deseja repetir o código.

```jsx
for (let i = 0; i < 5; i++) {
  console.log(`Número: ${i}`);
}
// Saída:
// Número: 0
// Número: 1
// Número: 2
// Número: 3
// Número: 4
```

📌 **Explicação:**

1. `let i = 0`: Inicializa o contador.
2. `i < 5`: Define a condição para continuar o loop.
3. `i++`: Incrementa o valor de `i` a cada iteração.

---

### **2. `while`**

O loop `while` repete o código enquanto uma condição for verdadeira.

```jsx
let contador = 0;
while (contador < 3) {
  console.log(`Contando: ${contador}`);
  contador++;
}
// Saída:
// Contando: 0
// Contando: 1
// Contando: 2
```

📌 **Quando usar:**

- Quando você não sabe quantas vezes o loop vai rodar.

---

### **3. `do...while`**

Semelhante ao `while`, mas garante que o código seja executado pelo menos uma vez antes de verificar a condição.

```jsx
let numero = 5;
do {
  console.log(`Executando...`);
  numero--;
} while (numero > 5);
// Saída:
// Executando...
```

📌 **Quando usar:**

- Quando você precisa executar o código pelo menos uma vez, independentemente da condição.

---

### **🔄 Controlando o Loop**

### **`break`**

Interrompe o loop antes de completar todas as iterações.

```jsx
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Saída: 0, 1, 2, 3, 4
```

### **`continue`**

Pula para a próxima iteração sem executar o restante do código na atual.

```jsx
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Saída: 0, 1, 3, 4
```

---

### **💻 Exemplos Práticos**

**Iterando Sobre um Array:**

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Saída:
// Maçã
// Banana
// Laranja
```

**Somando Números de 1 a 10:**

```jsx
let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log(`Soma total: ${soma}`); // Saída: Soma total: 55
```

**Buscando um Valor em uma Lista:**

```jsx
let numeros = [3, 8, 12, 5, 10];
let busca = 12;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === busca) {
    console.log(`Número ${busca} encontrado na posição ${i}!`);
    break;
  }
}
// Saída: Número 12 encontrado na posição 2!
```

**Validando Dados com `while`:**

```jsx
let senha = "1234";
let tentativa;

do {
  tentativa = prompt("Digite a senha:");
} while (tentativa !== senha);

console.log("Senha correta! 🎉");
```

---

### **🛠️ Dicas Importantes**

- **Cuidado com loops infinitos!**
  Sempre garanta que a condição de saída do loop será atingida:
  ```jsx
  let i = 0;
  while (true) {
    console.log(i);
    i++;
    if (i === 5) break; // Evita loop infinito
  }
  ```
- **Escolha o loop certo:**
  - Use `for` quando souber o número exato de iterações.
  - Use `while` quando depender de uma condição variável.
  - Use `do...while` para garantir uma execução inicial.

---

### **🎯 Exercícios Práticos**

1. Use um loop `for` para imprimir os números de 1 a 10 no console.
2. Crie uma lista de nomes e use um `for` para exibir cada nome.
3. Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.
4. Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
5. Com um `do...while`, simule um caixa eletrônico pedindo a senha até que ela esteja correta.
6. Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).

---

### **🚀 Conclusão**

Parabéns por concluir o quinto dia do desafio! 🎉 Agora você sabe como usar os laços de repetição para automatizar tarefas no código.

Amanhã, vamos aprender sobre **Listas e Arrays**, uma estrutura de dados essencial para trabalhar com coleções de informações. Te vejo lá! 👋

# 06 = Arrays

### **📌 Introdução**

Bem-vindo ao **sexto dia do desafio!** 🎉 Hoje vamos falar sobre **Arrays**, uma das estruturas de dados mais fundamentais na programação.

Imagine que você precisa armazenar vários valores relacionados, como os nomes dos seus amigos ou uma lista de compras. Criar uma variável para cada item seria inviável, certo? É aqui que entram os **arrays**.

Arrays permitem que você armazene vários valores em uma única variável e acesse ou manipule esses valores com facilidade. Vamos mergulhar nesse conceito e aprender como usá-lo no JavaScript! 🚀

---

### **📚 O Que é um Array?**

Um **array** é uma lista ordenada de valores que podem ser de qualquer tipo: números, strings, objetos, ou até outros arrays.

💡 **Exemplo no mundo real:**

- Uma lista de tarefas.
- Nomes de participantes em um evento.

📌 **Exemplo no código:**

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas); // Saída: ["Maçã", "Banana", "Laranja"]
```

---

### **🔍 Como Criar Arrays no JavaScript**

### **1. Arrays Simples:**

```jsx
let numeros = [1, 2, 3, 4, 5];
```

### **2. Arrays Mistos (diferentes tipos):**

```jsx
let misto = [42, "Texto", true, { chave: "valor" }];
```

### **3. Array Vazio:**

```jsx
let vazio = [];
```

📌 **Dica:** Você pode adicionar elementos ao array depois de criá-lo:

```jsx
vazio.push("Novo Elemento");
console.log(vazio); // Saída: ["Novo Elemento"]
```

---

### **🔄 Métodos e Propriedades de Arrays**

Os arrays vêm com vários métodos úteis para facilitar sua manipulação. Aqui estão os mais importantes:

| Método      | Descrição                        | Exemplo                      | Resultado                    |
| ----------- | -------------------------------- | ---------------------------- | ---------------------------- |
| `push()`    | Adiciona um elemento ao final    | `frutas.push("Uva")`         | `["Maçã", "Banana", "Uva"]`  |
| `pop()`     | Remove o último elemento         | `frutas.pop()`               | `["Maçã", "Banana"]`         |
| `shift()`   | Remove o primeiro elemento       | `frutas.shift()`             | `["Banana", "Laranja"]`      |
| `unshift()` | Adiciona um elemento no início   | `frutas.unshift("Morango")`  | `["Morango", "Maçã"]`        |
| `length`    | Retorna o tamanho do array       | `frutas.length`              | `3`                          |
| `indexOf()` | Retorna o índice de um valor     | `frutas.indexOf("Banana")`   | `1`                          |
| `slice()`   | Retorna parte do array           | `frutas.slice(1, 3)`         | `["Banana", "Laranja"]`      |
| `splice()`  | Adiciona/Remove elementos        | `frutas.splice(1, 1, "Uva")` | `["Maçã", "Uva", "Laranja"]` |
| `join()`    | Junta os elementos em uma string | `frutas.join(", ")`          | `"Maçã, Banana, Laranja"`    |

---

### **💻 Exemplos Práticos**

**Adicionar e Remover Elementos:**

```jsx
let lista = ["Caderno", "Caneta", "Borracha"];
lista.push("Lápis"); // Adiciona no final
lista.shift(); // Remove o primeiro elemento
console.log(lista); // Saída: ["Caneta", "Borracha", "Lápis"]
```

**Iterar Sobre um Array:**

```jsx
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
// Saída:
// 1
// 2
// 3
// 4
// 5
```

**Encontrar um Elemento:**

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
let indice = frutas.indexOf("Banana");
console.log(indice); // Saída: 1
```

**Copiar Parte de um Array:**

```jsx
let numeros = [10, 20, 30, 40, 50];
let subArray = numeros.slice(1, 4);
console.log(subArray); // Saída: [20, 30, 40]
```

**Manipular Arrays com `splice`:**

```jsx
let lista = ["A", "B", "C"];
lista.splice(1, 1, "X", "Y");
console.log(lista); // Saída: ["A", "X", "Y", "C"]
```

---

### **🛠️ Dicas Importantes**

- **Acessar o Último Elemento:**
  Use `array[array.length - 1]` para acessar o último elemento de um array.

```jsx
let numeros = [5, 10, 15];
console.log(numeros[numeros.length - 1]); // Saída: 15
```

- **Cuidado com Índices Inválidos:**
  Acessar um índice que não existe retorna `undefined`:

```jsx
let frutas = ["Maçã", "Banana"];
console.log(frutas[5]); // Saída: undefined
```

---

### **🎯 Exercícios Práticos**

1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.
2. Use um loop para exibir todos os itens de um array de compras.
3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.
4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.
5. Use `splice` para substituir o terceiro item de um array por "Substituído".
6. Transforme um array de palavras em uma frase completa usando `join`.

---

### **🚀 Conclusão**

Parabéns por concluir o sexto dia do desafio! 🎉 Agora você já sabe como criar, manipular e utilizar arrays no JavaScript.

Amanhã, vamos falar sobre **Funções**, um conceito que vai ajudar você a organizar melhor o seu código. Te vejo lá! 👋

# 07 - Funções

### **📌 Introdução**

Bem-vindo ao **sétimo dia do desafio!** 🎉 Hoje vamos falar sobre **funções**, o coração de qualquer programa bem estruturado.

Uma função é como uma **receita de bolo**: você define os ingredientes (entradas), segue os passos (código dentro da função) e obtém o bolo pronto (resultado).

Elas ajudam a organizar o código, evitar repetições e facilitar a reutilização. Vamos explorar os diferentes tipos de funções no JavaScript, entender como elas funcionam e criar exemplos práticos. 🚀

---

### **📚 O Que é uma Função?**

Uma **função** é um bloco de código que realiza uma tarefa específica. Você pode pensar nela como um **mini-programa** dentro do seu programa principal.

💡 **Exemplo no mundo real:**

- Uma função para calcular a soma de dois números.
- Uma função para validar um email.

📌 **Exemplo no código:**

```jsx
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Ana")); // Saída: Olá, Ana!
```

---

### **🔍 Como Criar Funções no JavaScript**

### **1. Declaração de Função (Function Declaration):**

```jsx
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // Saída: 5
```

### **2. Expressão de Função (Function Expression):**

```jsx
const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(4, 5)); // Saída: 20
```

### **3. Arrow Function (ES6):**

```jsx
const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // Saída: 5
```

📌 **Dica:** Use arrow functions para simplificar código curto e direto.

---

### **🔄 Parâmetros e Retornos**

**Funções com Parâmetros:**
Parâmetros são como "ingredientes" que a função precisa para funcionar.

```jsx
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar("João")); // Saída: Olá, João!
```

**Funções Sem Retorno:**
Nem todas as funções precisam retornar um valor.

```jsx
function exibirMensagem(mensagem) {
  console.log(mensagem);
}

exibirMensagem("Bem-vindo ao curso!"); // Saída: Bem-vindo ao curso!
```

**Funções com Valor Padrão:**
Você pode definir valores padrão para os parâmetros.

```jsx
function somar(a = 0, b = 0) {
  return a + b;
}

console.log(somar(5)); // Saída: 5 (b = 0 por padrão)
```

---

### **🔄 Funções de Alta Ordem**

Funções de alta ordem são aquelas que recebem outras funções como argumentos ou retornam funções.

💡 **Exemplo:**

```jsx
function calcular(a, b, operacao) {
  return operacao(a, b);
}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(calcular(5, 3, somar)); // Saída: 8
console.log(calcular(5, 3, multiplicar)); // Saída: 15
```

---

### **💻 Exemplos Práticos**

**Calculadora Básica:**

```jsx
function calcular(a, b, operacao) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operação inválida";
  }
}

console.log(calcular(10, 5, "+")); // Saída: 15
```

**Verificar Par ou Ímpar:**

```jsx
function parOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(parOuImpar(7)); // Saída: Ímpar
```

**Converter Temperatura:**

```jsx
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusParaFahrenheit(25)); // Saída: 77
```

**Calcular Fatorial:**

```jsx
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Saída: 120
```

**Filtrar Números Positivos em um Array:**

```jsx
function filtrarPositivos(array) {
  return array.filter((numero) => numero > 0);
}

console.log(filtrarPositivos([-3, 5, -1, 8])); // Saída: [5, 8]
```

---

### **🛠️ Dicas Importantes**

- **Evite Repetição de Código:**
  Sempre que perceber que está repetindo código, considere criar uma função.
- **Nomeie Funções de Forma Clara:**
  O nome da função deve indicar claramente o que ela faz.
  ```jsx
  function calcularMedia() {} // Claro
  function calc() {} // Pouco claro
  ```
- **Use Funções para Modularizar o Código:**
  Divida tarefas complexas em várias funções menores e reutilizáveis.

---

### **🎯 Exercícios Práticos**

1. Crie uma função que calcule o dobro de um número.
2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.
3. Crie uma função que receba dois números e retorne o maior deles.
4. Implemente uma função que calcule a média de três números.
5. Crie uma função que receba um array de números e retorne a soma deles.
6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

---

### **🚀 Conclusão**

Parabéns por completar o sétimo dia do desafio! 🎉 Agora você entende o que são funções, como criá-las, e como utilizá-las para organizar e reutilizar o código.

Amanhã, vamos aprender sobre **Matrizes**, que são arrays com múltiplas dimensões. Te vejo lá! 👋
