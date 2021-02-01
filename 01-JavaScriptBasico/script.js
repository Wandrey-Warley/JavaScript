//TIPOS DE VARIAVEIS -------------------------------------------------------------

// Declarar uma variável com o seu nome
var nome = 'Wandrey';
// Declarar uma variável com a sua idade
var idade = 22;
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFavorita;
// Atribuir valor a sua comida favorita
comidaFavorita = 'Hamburger';
// Declarar 5 variáveis diferentes sem valores
var n1, n2, n3, n4, n5;

console.log(
  'Nome: ' + nome + ', idade: ' + idade + ', comida favorita: ' + comidaFavorita
);


//TIPOS DE DADOS -----------------------------------------------------------------

console.log("Start");
var nome = 'Wandrey';
console.log(typeof nome);

console.log(`Meu nome é ${nome} Warley`); //Usando crase

//Exercicios

// Declare uma variável contendo uma string
var nome = 'Wandrey Warley'
// Declare uma variável contendo um número dentro de uma string
var idade = '22';
// Declare uma variável com a sua idade
var minhaIdade = 22;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Wandrey', sobrenome = 'Warley', nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
console.log(2e10);
console.log('deu certo');


//NUMEROS E OPERADORES EXERCICIOS-----------------------------------------------

console.log('Exercicio Operadores');
// Qual o resultado da seguinte expressão?
let total = 10 + 5 * 2 / 2 + 20;//Total = 35
console.log(total);
// Crie duas expressões que retornem NaN
let notNumber = 2e10;//2e o ide nao deixar
let noteNumber2 = 8 / 'a';
console.log(notNumber);
// Somar a string '200' com o número 50 e retornar 250
let soma = +'200' + 50;
console.log(soma);
// Incremente o número 5 e retorne o seu valor incrementado
let incrmt = 5;
console.log(incrmt++);
console.log(incrmt);
// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = ' kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(peso);


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if(22 > 15){
  console.log('Minha idade é maior');
}else{
  console.log('Minha idade é menor');
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log("Valor retornado: " + expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china){
  console.log("Brasil tem mais habitantes");
}else{
  console.log('Brasil tem menos habitantes');
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
};

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
};

//FUNÇÃO ----------------------------------------------------------------------

function quadrado(a){
  return a * a;
};

addEventListener('click', function(){
  console.log('Clicando');
});

function imc(peso, altura){
  let imc = peso / (altura **2);
  return imc;
}

// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado){
  if(dado) return !!dado;
  if(dado == false) return false;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeFull(nome, sobrenome){
  return `${nome}  ${sobrenome}`;
}
// Crie uma função que verifica se um número é par
function isEven(numero){
  var modulo = numero % 2;
  if(modulo === 0){
    return true;
  }else{
    return false;
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof(dado);
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function() {
  console.log(nomeCompleto);
});
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

// OBJETOS ------------------------------------------------------------------

var pessoa = {
  nome: 'Wandrey',
  idade: 22,
}
var quadrado = {
  lados: 4,
  area: function(lado) { 
    return lado * lado;
  },
  perimetro: function(lado) { 
    return lado * this.lados; 
  }
}


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Wandrey',
  sobrenome: 'Warley',
  idade: 22
}
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,
  latir: function(pessoa){
    if(pessoa === 'homem'){
      return 'au au';
    }else{
      return '...'
    }
  }
}
//corrigir depois essa tentativa
var place = document.querySelector('.btn');
var inputText = document.querySelector('.input');
var btnClique = document.querySelector('.btn');
console.log('Valor do input = ' + place.value);
var Text = ' meio da frase, ', Text2 = inputText.value;
place.innerText = 'Inicio da frase,' + Text + Text2;

function inserirTexto() {  return inputText.value;}

// nomeie 3 propriedades ou métodos de strings
var meuNome= 'Wandrey';
meuNome.strike;
meuNome.sub;
meuNome.sup;
// nomeie 5 propriedades ou métodos de elementos do DOM
btnClique.releasePointerCapture;
btnClique.remove;
btnClique.replaceChild;
btnClique.scroll;
btnClique.setAttribute;
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function copiar() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Texto copiado: " + copyText.value);
};  

// ARRAY ----------------------------------------------------------------------------

var games = [ 'uncharted' , 'god of war', 'far cry', 'cyberpunk 2077'];
console.log(games[3]);

var numeros = [];

for(i = 0 ; i<50; i++){
  numeros[i] = i + 1;
  if(numeros[i] == 20){
    console.log(`Parou em ${numeros[i]}`);
    break;
  }
};
console.log(`Array de numeros = [${numeros}]`);

games.forEach(function(game, index) {
  console.log(game, index);

});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let titulos = [ 1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
titulos.forEach(function(ano){
  console.log(`O Brasil ganhoou a copa de ${ano}`);
});
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if(frutas[i] === 'Pera'){
    console.log('Parei em Pera');
    break;
  };
};
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if(i === frutas.length - 1){
    frutaFinal = frutas[i];
    break;
  };
};

//OPERADOR TERNARIO -------------------------------------------------------------
let ultima = frutas[frutas.length - 1];
var idade = 20;
var beber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(beber);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);

// Por qual motivo o código abaixo retorna com erros?
{
  let cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);// O nome da variavel é cor
}

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  const dois = 2;
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const number = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const ans = 10 * number;
console.log(ans);
