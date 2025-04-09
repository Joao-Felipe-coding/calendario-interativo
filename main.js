function colorirDia() {
  //Pegarvalor do campo de dia
  let days = document.getElementById('days').value;

  //Pega valor do campo de cor
  let color = document.getElementById('color').value;

  //Pega os elementos da tabela calendario
  let calendar = document.getElementById('calendar');

  //verifica se o campo de dia foi preenchido
  if (!days) {
    alert('Favor informar o dia');
  } else if ((days > 0) && (days < 31)) {
    //Se o numero de duas está no intevalo aplicará a cor na célula do calendário
    let td = calendar.getElementsByTagName('td')[parseInt(days) + 1];
    td.style.backgroundColor = color;
  } else {
    alert('Favor informar um dia válido');
  }

  //Guarda a célula da tabela
  let elementos = document.querySelectorAll('td');

  //Declara e inicializa contadores
  let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

  //Loop para verificar o estilo de cada célula e contar quantas têm cor e qual cor
  for (let i = 0; i < elementos.length; i++) {
    //obtém o estilo computado do elemento atual
    var estilo = window.getComputedStyle(elementos[i]);

    //Obtém a cor de fundo atual da célula
    var corEstilo = estilo.backgroundColor;

    //Verifica a cor e incrementa o contador correspondente
    if (corEstilo === 'rgb(173, 216, 230)') { // azul
      contadorAzul++;
    } else if (corEstilo === 'rgb(152, 251, 152)') { // verde
      contadorVerde++;
    } else if (corEstilo === 'rgb(255, 182, 193)') { // rosa
      contadorRosa++;
    } else if (corEstilo === 'rgb(106, 90, 205)') { // roxo
      contadorRoxo++;
    }
  }

  // Atualiza a lista de cores usadas no HTML
  let listaCores = document.getElementById('lista-cores');
  listaCores.innerHTML = `
    <li>Azul: ${contadorAzul}</li>
    <li>Verde: ${contadorVerde}</li>
    <li>Rosa: ${contadorRosa}</li>
    <li>Roxo: ${contadorRoxo}</li>
  `;
}
