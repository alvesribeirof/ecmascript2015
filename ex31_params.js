function media(...notas) {//declaração de uma função com o parametro REST
  var total = notas.reduce((soma, nota) => soma + nota);//metodo reduce do array declarado na chamada da função como parametro
  return total / notas.length;//retorno do total dividido pelo tamanho do array notas
}

console.log(media(7.3, 7.7, 6.0));
