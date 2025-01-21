const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  // Validando nome (apenas letras)
  const nomeRegex = /^[A-Za-záéíóúàèìòùãõç\s]+$/;
  const nomeError = document.getElementById('nome-error');
  if (!nomeRegex.test(nome)) {
    nomeError.classList.add('show-error');
  } else {
    nomeError.classList.remove('show-error');
  }

  // Validação de Altura (apenas números e ponto para decimal)
  const alturaRegex = /^[0-9]+(\.[0-9]+)?$/; // Números e ponto decimal
  const alturaError = document.getElementById('altura-error');
  if (!alturaRegex.test(altura)) {
    alturaError.classList.add('show-error');
  } else {
    alturaError.classList.remove('show-error');
  }

  // Validação de Peso (apenas números e ponto para decimal)
  const pesoRegex = /^[0-9]+(\.[0-9]+)?$/; // Números e ponto decimal
  const pesoError = document.getElementById('peso-error');
  if (!pesoRegex.test(peso)) {
    pesoError.classList.add('show-error');
  } else {
    pesoError.classList.remove('show-error');
  }

  // Verificando se todos os campos estão válidos antes de calcular
  if (nomeRegex.test(nome) && alturaRegex.test(altura) && pesoRegex.test(peso)) {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';
    if (valorIMC < 18.5) {
      classificacao = 'Abaixo do Peso';
    } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
      classificacao = 'Peso Normal';
    } else if (valorIMC >= 25 && valorIMC < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (valorIMC >= 30 && valorIMC < 34.9) {
      classificacao = 'Obesidade Grau I';
    } else if (valorIMC >= 35 && valorIMC < 39.9) {
      classificacao = 'Obesidade Grau II (severa)';
    } else {
      classificacao = 'Obesidade Grau III (mórbida)';
    }

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.textContent = 'Preencha todos os campos corretamente.';
  }
}

calcular.addEventListener('click', imc);
