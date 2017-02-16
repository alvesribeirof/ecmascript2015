var notasAlunos = [6.8, 7.9, 8.2];
var turmaES5 = notasAlunos.concat([6.7, 8.9, 9.1]);
var turmaES6 = [...notasAlunos, 6.7, 8.9, 9.1];//concatena os novos valores para dentro do array com o operador spread (...)

console.log(turmaES5);
console.log(turmaES6);
