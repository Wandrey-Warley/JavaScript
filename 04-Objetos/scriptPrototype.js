window.onload = () =>{
    console.log('Script Prototype start!');
}


function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}
Pessoa.prototype.andar = function(){ 
    return this.nome + ' andou';
}

const wandrey = new Pessoa('wandrey', 22);

console.log(Pessoa.prototype);
console.log(wandrey);

const Carro = {
    marca : 'Ford',
    preco : 2000,
    andar (){
        return true;
    }

}

console.log(typeof(Carro));
console.log(typeof(Carro.marca));
console.log(typeof(Carro.preco));
console.log(typeof(Carro.andar()));

//EXERCICIOS -----------------------------------

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function People(nome, sobrenome, idade){
    this.nome = nome;
    this.sobremone = sobrenome;
    this.idade = idade;
};
People.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobremone}`
}

const wandreywarley = new People('Wandrey Warley', 'Alves Turibio', 23);

wandreywarley.nomeCompleto();

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

//Usei li.constructor.name ou li.click.constructor.name e assim vai

li; //HTMLLiElement
li.click; //Function
li.innerText; //String
li.value;  //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
