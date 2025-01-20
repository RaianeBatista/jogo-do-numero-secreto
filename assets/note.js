//Curso funções e listas
//1. Interagindo com HTML

// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";
// //Criando uma função
// function verificarChute() {
//   console.log("O botão foi clicado!");
// }
//Desafio: Hora da prática
//1.Fazer download do arquivo
//2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Hora do Desafio";

// //3.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
// function verificarChute2() {
//   console.log("O botão foi pressionado!");
// }

// //4.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
// function verificarAlerta() {
//   alert("Eu amo JS");
// }

// //5.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
// function verificaCidade() {
//   const cidade = prompt(`Qual o nome da cidade do Brasil?`);
//   alert(`Estive em ${cidade} e lembrei de você`);
// }

// //6.Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
// function somaNumero() {
//   let numero1 = parseInt(prompt("Digite um número:"));
//   let numero2 = parseInt(prompt("Digite outro número:"));
//   let resultado = numero1 + numero2;
//   alert(`A soma dos números é = ${resultado}`);
// }

//2.Funções - Funções com parâmetros
// let numeroSecreto = gerarNumeroAleatorio();

// function exibirtextoNaTela(tag, texto) {
//   let campo = document.querySelector(tag);
//   campo.innerHTML = texto;
// }

// exibirtextoNaTela("h1", "Jogo do número secreto");
// exibirtextoNaTela("p", "Escolha um número entre 1 e 10");

// function verificarChute() {
//   //4. Tipo booleano
//   let chute = document.querySelector("input").value;
//   //console.log(numeroSecreto);
//   console.log(chute == numeroSecreto);
// }

//3.Função com retorno
// function gerarNumeroAleatorio() {
//   return parseInt(Math.random() * 10 + 1);
// }
//Desafio hora da prática
//1. Criar uma função que exibe "Olá, mundo!" no console.
// function helloWorld() {
//   console.log("Olá mundo");
// }

// //2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function mensagemComNome(nome) {
//   console.log(`Olá, ${nome}`);
// }

// mensagemComNome("Sara");

// //3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// let numero = parseInt(Math.random() * 100 + 1);
// function numeroDobrado(numero) {
//   return numero * 2;
// }
// console.log(` O dobro de ${numero} é ${numeroDobrado(numero)} `);

// //4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function mediaDeNumeros(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }
// console.log(`A média dos números é ${mediaDeNumeros(5, 9, 17)}`);

// //5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function numeroMaior(numero1, numero2) {
//   if (numero1 > numero2) {
//     return console.log(`O ${numero1} é maior que ${numero2}`);
//   } else {
//     return console.log(`O ${numero2} é maior que ${numero1}`);
//   }
// }

// numeroMaior(23, 59);

// //6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function multiplicanumero(numero) {
//   return numero * numero;
// }

// console.log(multiplicanumero(4));

//3. Reiniciando o jogo
// 2. Verificando o chute
// function gerarNumeroAleatorio() {
//   return parseInt(Math.random() * 10 + 1);
// }

// let numeroSecreto = gerarNumeroAleatorio();

// function exibirtextoNaTela(tag, texto) {
//   let campo = document.querySelector(tag);
//   campo.innerHTML = texto;
// }

// exibirtextoNaTela("h1", "Jogo do número secreto");
// exibirtextoNaTela("p", "Escolha um número entre 1 e 10");

// function verificarChute() {
//   let chute = document.querySelector("input").value;

//   if (chute == numeroSecreto) {
//     exibirtextoNaTela('h1', 'Acertou!');
//     exibirtextoNaTela('p', 'Yes! Você descobriu o número secreto!');
//   } else {
//     if (chute > numeroSecreto) {
//       exibirtextoNaTela('p', 'O número secreto é menor');
//     } else {
//       exibirtextoNaTela('p', 'O número secreto é maior');
//     }
//   }
// }

// //3. Tentativas
// function gerarNumeroAleatorio() {
//   return parseInt(Math.random() * 10 + 1);
// }

// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirtextoNaTela(tag, texto) {
//   let campo = document.querySelector(tag);
//   campo.innerHTML = texto;
// }

// function exibirMensagemInicial() {
//   exibirtextoNaTela("h1", "Jogo do número secreto");
//   exibirtextoNaTela("p", "Escolha um número entre 1 e 10");
// }

// exibirMensagemInicial();

// function verificarChute() {
//   let chute = document.querySelector("input").value;

//   if (chute == numeroSecreto) {
//     exibirtextoNaTela("h1", "Acertou!");
//     let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
//     let mensagemTentativas = `Yes! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
//     exibirtextoNaTela("p", mensagemTentativas);
//     document.getElementById("reiniciar").removeAttribute("disabled");
//   } else {
//     if (chute > numeroSecreto) {
//       exibirtextoNaTela("p", "O número secreto é menor");
//     } else {
//       exibirtextoNaTela("p", "O número secreto é maior");
//     }
//     tentativas++;
//     limparCampo();
//   }
// }

// function limparCampo() {
//   chute = document.querySelector("input");
//   chute.value = "";
// }

// //5. Reiniciando o jogo
// function reiniciarJogo() {
//   numeroSecreto = gerarNumeroAleatorio();
//   limparCampo();
//   tentativas = 1;
//   exibirMensagemInicial();
//   document.getElementById("reiniciar").setAttribute("disabled", "true");
// }

//Desafio: hora da prática
//1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// function calculaIMC(peso, altura) {
//   return peso / (altura * altura);
// }

// console.log(` Seu IMC é: ${calculaIMC(75, 1.8)}`);

// //2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function valorFatorial(num) {
//   if (num == 0 || num == 1) return 1;
//   return num * valorFatorial(num - 1);
// }
// let num = 5;
// console.log(`O valor fatorial de ${num} é: ${valorFatorial(5)}`);

// //3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// let cotacaoDolar = 4.8;
// let valorEmDolares = 100;
// let valorEmReais = conversaoParaReais(valorEmDolares, cotacaoDolar);

// function conversaoParaReais(dolar, cotacao) {
//   return dolar * cotacao;
// }
// console.log(
//   `${valorEmDolares} dólares equivalem a R$${valorEmReais.toFixed(2)} `
// );

// //4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function calcularAreaEPerimetro(altura, largura) {
//   let area = altura * largura;
//   let perimetro = 2 * (altura + largura);

//   console.log(`Área: ${area} unidades quadradas`);
//   console.log(`Perímetro: ${perimetro} metros`);
// }

// calcularAreaEPerimetro(5, 10);

// //5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// function calcularAreaEPerimetroCircular(raio) {
//   let pi = 3.1;
//   let area = pi * raio * raio;
//   let perimetro = 2 * pi * raio;

//   console.log(`Área da sala ${area} unidades quadradas`);
//   console.log(`Perimentro da sala ${perimetro} metros`);
// }

// calcularAreaEPerimetroCircular(5);

// //6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro
// function tabuada(num) {
//   console.log(`Tabuada de ${num}`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }
// tabuada(6);

//04. Listas
//02. Documentação sobre listas
// var frutas = ["maça", "banana"];
// console.log(frutas, frutas.length);

// let numeros = [1, 5, 9];
// numeros.length;
// numeros[0];

// let linguagens = ["javascript", "java", "python"];
// linguagens[1];
// linguagens[2];

// linguagens[linguagens.length - 1];

//03. Aula Implementando a lista
// let listaDeNumerosSorteados = [];
// let numeroLimite = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirtextoNaTela(tag, texto) {
//   let campo = document.querySelector(tag);
//   campo.innerHTML = texto;
// }

// function exibirMensagemInicial() {
//   exibirtextoNaTela("h1", "Jogo do número secreto");
//   exibirtextoNaTela("p", "Escolha um número entre 1 e 10");
// }

// exibirMensagemInicial();

// function verificarChute() {
//   let chute = document.querySelector("input").value;

//   if (chute == numeroSecreto) {
//     exibirtextoNaTela("h1", "Acertou!");
//     let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
//     let mensagemTentativas = `Yes! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
//     exibirtextoNaTela("p", mensagemTentativas);
//     document.getElementById("reiniciar").removeAttribute("disabled");
//   } else {
//     if (chute > numeroSecreto) {
//       exibirtextoNaTela("p", "O número secreto é menor");
//     } else {
//       exibirtextoNaTela("p", "O número secreto é maior");
//     }
//     tentativas++;
//     limparCampo();
//   }
// }

// function gerarNumeroAleatorio() {
//   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
//   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

//   if (quantidadeDeElementosNaLista == numeroLimite) {
//     listaDeNumerosSorteados = [];
//   }

//   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//     return gerarNumeroAleatorio();
//   } else {
//     listaDeNumerosSorteados.push(numeroEscolhido);
//     console.log(listaDeNumerosSorteados);
//     return numeroEscolhido;
//   }
// }

// function limparCampo() {
//   chute = document.querySelector("input");
//   chute.value = "";
// }

//5. Reiniciando o jogo
// function reiniciarJogo() {
//   numeroSecreto = gerarNumeroAleatorio();
//   limparCampo();
//   tentativas = 1;
//   exibirMensagemInicial();
//   document.getElementById("reiniciar").setAttribute("disabled", "true");
// }

// //Desafio: Hora da prática -- Listas
// //1. Crie uma lista vazia, com o nome listaGenerica
// let listaGenerica = [];

// //2.Crie uma lista de linguagens de programação chamada linguagensDeProgramacao
// //  com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// console.log(linguagensDeProgramacao)

// //3.Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// let linguagensDeProgramacao2 = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// linguagensDeProgramacao2.push("Java", "Ruby", "GoLang");
// console.log(linguagensDeProgramacao2);

// //4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// let nomes = ["Anderson", "Mariana", "Sara"];
// console.log(nomes[0]);

// //5.Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// let nomes2 = ["Anderson", "Mariana", "Sara"];
// console.log(nomes[1]);

// //6.Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
// let nomes3 = ["Anderson", "Mariana", "Sara"];

// console.log(nomes[nomes3.length - 1]);

//Tópico 05. Publicando o projeto
//02. Speech
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirtextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.1});
}

function exibirMensagemInicial() {
  exibirtextoNaTela("h1", "Jogo do número secreto");
  exibirtextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirtextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Yes! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirtextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirtextoNaTela("p", "O número secreto é menor");
    } else {
      exibirtextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

//5. Reiniciando o jogo
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}
