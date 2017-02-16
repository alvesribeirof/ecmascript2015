//declaração de variavel pessoa com dois atributos
var pessoa = {nome: 'Ana', idade: 20};
//operador destructuring
var {nome, idade} = pessoa;
console.log(nome,idade);
//operador destructuring com nomes de variaveis diferentes
var {nome: n, idade: i} = pessoa;
console.log(n, i);
//atributos não presentes no objeto com retorno padrão "Ativa" para situação
var {genero, situacao = 'Ativa'} = pessoa;
console.log(genero, situacao);
