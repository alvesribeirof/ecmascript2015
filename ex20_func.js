function rand({min = 0, max = 1000}) {//declaração da função passando um objeto com dois atributos
  var value = Math.random() * (max - min);//geração do numero randomico com uma ordem de grandeza em cima de minimo e maximo
  return Math.floor(value) + min;//aplicação de um arredondamento e desloca o valor minimo para um intervalo correto
}
console.log(rand({max: 50, min: 40}));//atribuição dos atributos para geração do valor
console.log(rand({min: 955}));//passagem do minimo
console.log(rand({}));//objeto vazio sem passagem de atributos assumindo os padroes
console.log(rand());//sem passagem de objeto causando erro
