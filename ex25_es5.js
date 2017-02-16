function soma(a, b) {
  a = (0 in arguments) ? a : 1;//verifica se o indice 0 do array arguments está presente
  b = (1 in arguments) ? b : 1;//verifica se o indice 1 do array arguments está presente
  return a + b;
}

console.log(soma(), soma(2, 3), soma(0));
