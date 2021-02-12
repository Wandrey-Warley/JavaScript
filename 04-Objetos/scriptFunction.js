window.onload = () => {
    console.log('Array function started');
};

const perimetro = new Function('lado', 'return lado * 4;');

function lado() {
    return lado * 4;
}

const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();


//Exercicios ---------------------------------------------------------

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo){
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : '';
    conteudo ?  elemento.innerHTML = conteudo : null;
    return elemento;
}


console.log(criarElemento('div'))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

//Exercicios ---------------------------------------------

// Crie uma função que verifique
// corretamente o tipo de dado

function verify(dado){
    return Object.prototype.toString.call(dado);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
    lados:{
        value: 4,
        enumerable: true
    }
});

quadrado.lados = 5;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
Object.freeze(configuracao);
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array
console.log(Object.getOwnPropertyDescriptors(String.prototype));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));
