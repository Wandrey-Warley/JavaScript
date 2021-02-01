window.onload = () => {
    console.log('Script Native Start')
}



console.log(typeof Array.from); // Verifica se o objeto existe

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

  
