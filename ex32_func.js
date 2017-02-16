var estoque = [ //declaração do array estoque contendo todos os atributos
  {nome: 'Resma de papel A4', preco: 19.90, qtde: 300, fragil: false},
  {nome: 'Monitor LG 29 IPS', preco: 1699, qtde: 15, fragil: true},
  {nome: 'Ovos brancos - 30 unid.', preco: 18.99, qtde: 21, fragil: true},
  {nome: 'Pneu Pirelli Scorpion Aro 19', preco: 1027.34, qtde: 16, fragil: false},
  {nome: 'Apple iPad Pro 32gb - tela 12,9', preco: 3999, qtde: 17, fragil: true}
];

/*
declaração da constante
const qtdeProdutosCarosEFrageis = estoque
.filter(function (item) {//passa uma função anonima para o filtro com os argumentos a serem seguidos para a filtragem
  return item.preco >= 1000;//resultado é um array
})
.filter(function (item) {//passa uma função anonima para o filtro com os argumentos a serem seguidos para a filtragem
  return item.fragil;//resultado é um array
})
.map(function (item) {//usada para transformar os elementos de um array
  return item.qtde;//transformando um array de objeto em um array de inteiros
})                //acumulador
.reduce(function (total, qtde) { //pega um array com vários elementos e reduzir num unico valor
  return total + qtde;
});
console.log(qtdeProdutosCarosEFrageis);
*/

const isPrecoAlto = item => item.preco >= 1000;//declaração arrow function de function anonima
const isFragil = item => item.fragil;//declaração arrow function de function anonima
const somatorio = (total, qtde) => total + qtde;//declaração arrow function de function anonima

const qtdeProdutosCarosEFrageis = estoque
.filter(isPrecoAlto)
.filter(isFragil)
.map(item => item.qtde)//declaração arrow function de function anonima
.reduce(somatorio);
console.log(qtdeProdutosCarosEFrageis);
