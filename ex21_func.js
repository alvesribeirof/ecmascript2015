function rand([min = 0, max = 1000]) { //declaração da função passando arrays com valores padrões
  if(min > max)[min, max] = [max, min];//teste de minimo maior que maximo (passagem invertida) onde extrai os atributos e conserta o erro de inversão
  var value = Math.random() * (max - min);//geração do mumero randomico dentro do intervalo necessário (ordem de grandeza)
  return Math.floor(value) + min;//aplicação do arrendondamento e desloca o ranger a partir do valor minimo
}
console.log(rand([50, 40]));//passagem invertida dos atributos para trocar as variaveis
console.log(rand([992]));//passagem de um atributo assumindo minimo
console.log(rand([,10]));//passagem do segundo atributo (maximo) assumindo o minimo com 0
console.log(rand([]));//passagem de array vazio assumindo os valores padrões
console.log(rand());//passagem incorreta sem o objeto gerando erro
