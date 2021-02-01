console.log('Start script');

//SELEÇÃO DE ELEMENTOS ----------------------------------------------------------------
/*
const animais = document.getElementById('animais');
console.log(animais);//Imprime o html que contem id animais

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);//Imprime o html que contem grid-section

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);//Imprime o html de li

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);//Imprime o html de ul

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);//Imrprime o html da primeira tag que tiver link

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);//Imprime uma NodeList

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');
console.log(gridSectionHtml);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item,index){
   // console.log(item);
    console.log(index);
});

const arrayGrid = Array.from(gridSectionHtml);

//EXERCICIOS ----------------------------------------------------------------------------

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const soImagem = window.document.querySelectorAll('img[src^="img/imagem"]');
console.log(soImagem);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);
*/
//FOREACH ------------------------------------------------------------------------------
/*
const imagens = document.querySelectorAll('img');


imagens.forEach(function(item, index, array){
    //console.log(item, index, array);
});

//EXERCICIOS ---------------------------------------------------------------------------

// Mostre no console cada parágrado do site
const paragrafos = window.document.querySelectorAll('p');
console.log(paragrafos);
paragrafos.forEach((paragrafo)=> console.log(paragrafo))
// Mostre o texto dos parágrafos no console
paragrafos.forEach((texto) => console.log(texto.innerText))
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => console.log(item, index));

let i = 0;

imgs.forEach(() => {
    console.log(i++)
});

imgs.forEach(() => i++);



const menu = document.querySelector('.menu');

console.log(menu.classList);

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});
itensMenu[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const todasImgs = document.querySelectorAll('img');
todasImgs.forEach((item, index) => {
    if(item.hasAttribute('alt')){
        console.log(`${index + 1}° Possui!`);
        console.log(`Texto alternativo: ${item.alt}`);
    }else{
        console.log(`${index + 1}° Não Possui!`);
    }
});
// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.google.com.br');
*/

//ELEMENTOS -------------------------------------------------------------------------
/*
const listaAnimais = document.querySelector('.animais-lista');
console.log(`Altura total das imagens ${listaAnimais.scrollHeight}px`);
console.log(`Distancia ate o topo da pag ${listaAnimais.offsetTop}px`);

const ursoImg = document.querySelector('img[alt="Urso"]');
console.log(`Largura do urso ${ursoImg.clientWidth}px`); 

//  EXERCICIOS ------------------------------------------------------------------------

// Verifique a distância da primeira imagem
// em relação ao topo da página
function dTopo() {
    const primeiraImg = document.querySelector('img');
    console.log(`Distancia ate o topo = ${primeiraImg.offsetTop}px`);
}

// Retorne a soma da largura de todas as imagens
function somaImagens() {  
    const imagens = document.querySelectorAll('img');
    let total = 0;
    
    imagens.forEach((imagem, index) => {
        total += imagem.offsetWidth;
        if(index == imagens.length - 1){
            console.log(`Soma das larguras das imgs ${total}px`);
        };
    });
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight= link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link , 'Possui acessibilidade!');
    }else{
        console.log(link, 'Não possui acessibilidade!');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSamll = window.matchMedia('(max-width: 720px)').matches;
if(browserSamll){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu-mobile');
}


window.onload = function(){
    dTopo();
    somaImagens();
}

// EVENTOS -------------------------------------------------------------------------

const img = document.querySelector('img');
img.addEventListener('click', onClick);

function onClick(event){
    console.log("Clicou", event);
}

const h1 = window.document.querySelector('h1');
h1.addEventListener('mouseover', handleH1);
h1.addEventListener('mouseout', handleH1);

function handleH1() {  
    h1.classList.toggle('green');
}

//EXERCICIOS ---------------------------------------------------------------------------

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = window.document.querySelectorAll('a[href^="#"]');

function handleLink(event) {  
    event.preventDefault();
    links.forEach((link) =>{
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.toggle('ativo')
};

links.forEach((link) =>{
    link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('*');

function handleElemento(event){
    //event.target.remove();
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) { 
    if(event.key === "t"){
      document.documentElement.classList.toggle('textoMaior');  
    };
}; 


window.addEventListener('keydown', handleClickT);



// MANIPULAÇÃO -------------------------------------------------------------------
const h1 = document.querySelector('h1');
const menu = document.querySelector('.menu');
const mapa = document.querySelector('.mapa');
const animais = document.querySelector(".animais");
const animaisLista = document.querySelector(".animais-lista");
const titulo = document.querySelector('.titulo');

function handleKey (key){
    //console.log(key.key);
}

window.addEventListener('keydown', handleKey);

animaisLista.appendChild(mapa);

const subTitulo = document.createElement('h3');

subTitulo.innerText = 'E onde habitam';

animais.insertBefore(subTitulo, animaisLista);

// EXERCICIOS ---------------------------------------------------------------------------

// Duplique o menu e adicione ele em copy
const menu2 = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(menu2);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
console.log(faq);
const primeiraDt = faq.querySelector('dt');
console.log(primeiraDt);
// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiraDt.nextElementSibling;
console.log(primeiroDd);
// Substitua o conteúdo html de .faq pelo de .animais
const body = document.querySelector('body');

faq.innerHTML = animais.innerHTML;
*/