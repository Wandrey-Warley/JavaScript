window.onload = () => {
    console.log("Start");
}

//EXERCICIOS FUNCTION EXPRESS
// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,50'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function isolad(){
    const soma = 10 + 20;
    console.log(soma)
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();


function $$(selectedElement){
    const elements = document.querySelectorAll(selectedElement);

    function hide() {
        element.forEach(element => {
            element.style.display = 'none';
        });
        return this;
    }
    function show(){
        element.forEach(element => {
            element.style.display = 'initial';
        });
        return this;
    }
    function on(onEvent, callback){
        element.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
        return this;
    }
    function addClass(){
        element.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }
    function removeClass(){
        element.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    }



    return {
        selectedElement
    }
}

const btns = $$('button');

console.log(btns);


//EXERCICIOS DESTRUCTURING

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);//Puxar estilos de elemento
const {backgroundColor, color, margin} = btnStyles;
console.log(`background-color: ${backgroundColor}, color: ${color}, margin: ${margin}`);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
console.log(bobCor);

const numeros = [];
for(let i = 0; i< 2; i++){
    numeros[i] = parseInt(Math.random() * 1000) ;
}
const maiorNumero = Math.max(...numeros);
console.log(`Maior Numero: ${maiorNumero}`);

//EXERCICIOS SPREDS
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
  } 
  
  const redButton = createButton();
//   console.log(redButton);
  
  // Utilize o método push para inserir as frutas ao final de comidas.
  const frutas = ['Banana', 'Uva', 'Morango'];
  const comidas = ['Pizza', 'Batata'];
  
  comidas.push(...frutas);
  console.log(comidas);

//EXERCICIOS LOOPS E INTERABLES

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll('li')

for(li of lis){
    li.classList.add('item');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(propertie in window){
    // console.log(propertie);
}


// REGEX

//Padrão para selecionar CEP
// "\d{5}"  seleciona uma seguencia de 5 digitos
// "[-\s]?" seleciona traço ou espaço ou nada "?"
// "\d{3}"  seleciona uma seguencia de 3 digitos
const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];

for(cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

//Padrão para selecionar CPF
const regexpCPF = /(\d{3}[.-]?){3}\d{2}/g;

const cpfs = [
    '000.000.000-00',
    '000-000-000-00',
    '000.000.000.00',
    '000000000-00',
    '00000000000'
];

for(cpf of cpfs) {
console.log(cpf, cpf.match(regexpCPF));
}

//Padrão para selecionar CNPJ
const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

const cnpjs = [
'00.000.000/0000-00',
'00000000000000',
'00-000-000-0000-00',
'00.000.000/000000',
'00.000.000.000000',
'00.000.000.0000.00',
];

for(cnpj of cnpjs) {
console.log(cnpj, cnpj.match(regexpCNPJ));
}

//Padrão para selecionar TELEFONE
const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
];

for(telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE));
}

//Padrão para selecionar E-MAIL
const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for(email of emails) {
  console.log(email, email.match(regexpEMAIL));
}

//Padrão para selecionar TAG
const regexpTAG = /<\/?[\w\s="']+\/?>/gi;

const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}

