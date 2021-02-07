window.onload = () => {
    console.log('Script Native Start');
    console.log("Chamando as seguintes funções:");
    limpaPrecos();
}



console.log(`É uma: ${typeof Array.from}`); // Verifica se o objeto existe
 

//EXERCICIOS ------------------------------------------------
// Liste 5 objetos nativos
Object
String
Array
Function
Number
// Liste 5 objetos do browser
Window
history
document
HTMLCollection
NodeList
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
//Resposta usar window no console do chrome e do firefox


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

  const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  let total = 0, totalTaxas = 0, totalRecebimentos = 0;
  
  transacoes.forEach(transacao => {
      total += (+transacao.valor.slice(3));
    if(transacao.descricao.slice(0,4) === 'Taxa'){
      totalTaxas += (+transacao.valor.slice(3));
    }else{
      totalRecebimentos += (+transacao.valor.slice(3));
    } 
  });
  console.log(`Soma das taxas = R$ ${totalTaxas}`)
  console.log(`Soma dos recebimentos = R$ ${totalRecebimentos}`)
  console.log(`Soma das taxa e recebimento = R$ ${total}`)
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
 
  const array = transportes.split(";");
  console.log(array)

  
  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  html = html.replace(/[span]+/g, 'a');
  console.log(html);
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase.slice(-1));

  // Retorne o total de taxas
  const taxas = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  console.log(`Total de taxas = ${nTaxas()}`);
  
  function nTaxas(){
    let nTaxas = 0;
    taxas.forEach(item =>{
      item = item.toLowerCase().trim().slice(0,4);
      if(item === 'taxa') nTaxas ++;
    });
    return nTaxas;
  }
  
//Exercicios -------------------------------------------------------------
  // Retorne um número aleatório
  // entre 1050 e 2000
  const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
  console.log(`Número aleatorio: ${aleatorio}`);

  // Retorne o maior número da lista abaixo
  const numeros = '4, 5, 20, 8, 9';
  const ArrayNumeros = numeros.split(", ");
  console.log(`Maior numero: ${Math.max(...ArrayNumeros)}`);

  // Crie uma função para limpar os preços
  // e retornar os números com centavos arredondados
  // depois retorne a soma total
  let listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
  
  function limpaPrecos(){

    let somaPrecos = 0;
    
    listaPrecos.forEach((preco, index) => {
      preco = preco.slice(3).replace(",", ".");
      listaPrecos[index] = Number.parseFloat(preco).toLocaleString(
      'pt-BR', {style: 'currency', currency: 'BRL'});
      somaPrecos += +preco;
    });
    console.log(listaPrecos);
    console.log(`Soma = ${somaPrecos.toFixed(2)}`);
  }


  
    
