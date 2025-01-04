# Desafio-31-dias-JavaScript

1 desafio por dia de JavaScript do https://www.instagram.com/umporcentoprog/

## Dia 01 - Variaveis

1. Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".
2. Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.
3. Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.
4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.
5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".
6. Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

## Dia 02 - Condicionais

1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.
2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

## Dia 03 - Boleanos

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

## Dia 04 - String

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

- **Concatenar Strings:**
  Unir textos usando o operador `+` ou template literals:

```jsx
let nome = "Ana";
let saudacao = "Olá, " + nome + "!"; // Usando +
let saudacao2 = `Olá, ${nome}!`; // Usando template literals
console.log(saudacao); // Saída: Olá, Ana!
```

- **Acessar Caracteres:**
  Cada caractere de uma string tem um índice, começando em `0`:

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
| `trim()`        | Remove espaços do início e do fim      | `"  texto  ".trim()`                 | `"texto"`    |
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
