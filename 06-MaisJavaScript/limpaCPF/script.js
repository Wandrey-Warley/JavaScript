const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFs = (cpf) => {
  return cpf.map(limparCPF).map(construirCPF);
}

const substituirCPFs = (cpfElements) => {
  const cpfs = elementsInnerText(cpfElements);
  const cpfsFormatados = formatarCPFs(cpfs);

  cpfElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });

}

substituirCPFs(cpfsList);