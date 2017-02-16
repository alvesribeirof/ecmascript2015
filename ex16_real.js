function real(strings, ...values) {
  const resultado = [];//declaração da constante resultado
  values.forEach(function (value, index) { //para cada valor
    value = (typeof value == 'number')//garantir numero
    ? `R$${value.toFixed(2)}` : value; //conversão para duas casas decimais e concatena com o simbolo de R$
    resultado.push(strings[index], value);//pega o resultado e faz a junção da string com os valores para montar de forma correta a string
  });
  return resultado.join('');//transforma o array em string para mostrar no console

}
var preco = 29.99, parcela = 11; //declaração das variaveis
console.log(real `1x de ${preco} ou 3x de ${parcela}`);
