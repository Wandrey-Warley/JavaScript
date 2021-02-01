const h1Select = document.querySelector('h1');
const mainSelect = document.querySelector('main');


h1Select.addEventListener('click', mudar)


function mudar(){
    if(h1Select.textContent === 'Dom'){
        h1Select.textContent = 'Dom Para Iniciantes';
        h1Select.classList.remove('azul');
    }else{ 
        h1Select.textContent = 'Dom';
        h1Select.classList.add('azul');    
    }
    console.log(h1Select.textContent)
}

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(`Url da pagina [${document.title}] = ${hrefPagina}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
// Retorne a linguagem do navegador
const linguagem = window.clientInformation.language;
console.log(`Linguagem do navegador = ${linguagem}`);
// Retorne a largura da janela 
const larguraPagina = window.screen.width;
console.log(`Largura da pagina = ${larguraPagina}px`);
