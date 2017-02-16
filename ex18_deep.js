//Declaração da variavel pessoa com dois atributos onde um atributos tem mais dois atributos
var pessoa = {
  nome: 'Ana',
  endereco: { rua: 'A', numero:1000 }
};
//extraindo os atributos do objeto pessoa com o operador destructuring e adicionando mais um atributo para a pesquisa
var { endereco: {rua, numero, cep }} = pessoa;
console.log(rua, numero, cep);

var {conta: { numero, agencia }} = pessoa;
console.log(numero, agencia);
