window.onload = () => {
    console.log("Start Script Array")
};

let carros = ["Ford", "VW", "Fiat", 'Lamborguini', 'Ferrari'];
carros.push('Camaro', 'Kia');
carros.unshift('Chevrolet');
carros.splice( 3, 4, "Mustang");
console.log(carros);

const transportes = ["Carro", 'Moto', 'Avião'];

let veiculos = carros.concat(transportes, 'Barco');
veiculos = veiculos.join(' - ');
console.log(veiculos);

let number = 10;
let copy = number;
number = 20;
console.log(copy);

//Exercicios-----------------------------------------------------------------

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');
console.log(`Primeiro valor: ${primeiroValor}, ulitmo: ${ultimoValor}`);
console.log(comidas);

let estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
console.log(estudantes);
estudantes.reverse();
console.log(estudantes);
estudantes.includes('Joana') ? console.log('Sim') : console.log('Não');
estudantes.includes('Juliana') ? console.log('Sim') : console.log('Não');


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

let cars = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const copyCars = cars.splice();
cars.pop();
console.log(copyCars);
console.log(cars);

// Array e iteração

const aulas = [ 10, 20, 30, 100, 70, 80, 80, 90];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log(`Acumulador: ${acumulador} | Item: ${item} | Index: ${index}`);
  return acumulador + item;
}, 0);

console.log(`Maior numero de aulas[] = ${
  aulas.reduce((anterior, atual) => {
    if(anterior > atual) return anterior;
    else return atual;
  })
}`);

const procura = aulas.some((item) => {
  return  item == 81;
})

console.log(procura ? "Tem" : 'Não tem');


// Exercicios ----------------------------------------------------------

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const arrayCursos = Array.from(cursos = document.querySelectorAll('.curso'));
console.log(arrayCursos);

const objetosCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    aulas : aulas,
    horas : horas
  }
})
console.log(objetosCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
 
let maioresQue100 = numeros.filter((numero) => numero > 100);
console.log(`Numeros maiores que 100 = ${maioresQue100}`);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

console.log(instrumentos.some((instrumento) => instrumento == "Baixo"))

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
let total = 0;
compras.forEach((produto, index) => {
  total += (+produto.preco.slice(3).replace(',', '.'));
});

//Outra forma de fazer
const valorTotal = compras.reduce((acumulador, item) => {
  return acumulador +  (+item.preco.replace('R$', '').replace(',','.'));
 }, 0);

console.log(`Total da compra = R$ ${total}`);
console.log(`Total da compra = R$ ${valorTotal}`);