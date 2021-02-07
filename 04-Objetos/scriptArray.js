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