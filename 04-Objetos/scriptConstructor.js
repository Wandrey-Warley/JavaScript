window.onload = () =>{
  console.log('Script Constructor start!');
}

function CarroParcelado(marca, precoInicial) {
  const taxa = 1.25;
  this.preco = precoInicial * taxa;
  this.marca = marca;
}


fiesta =  new CarroParcelado('Ford' , 10000);


console.log(fiesta.marca);


// EXERCICIO ------------------------------------------------------------------------

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa (nome, idade) {
  this.nome = nome,
  this.idade =  idade,
  this.andar =  function () {
    console.log(this.nome + ' andou')
  }
}
const wandrey = new Pessoa('Wandrey Warley', 23)
console.log(wandrey.nome, wandrey.idade);
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const cliente1 = new Pessoa('João', 20);
const cliente2 = new Pessoa('Maria', 25);
const cliente3 = new Pessoa('Bruno', 15);

let clientes = [];
clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);
clientes.forEach((cliente) => {
  console.log(cliente.nome, cliente.idade);
})

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom (seletor) {
  const elementList =  document.querySelectorAll(seletor);
  this. elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  }
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  }
  

};

const p = new Dom('div');
p.addClass('ativo');