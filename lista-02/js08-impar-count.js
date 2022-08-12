/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 *
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 *
 * SAIDA
 * 4 3
 */

// Entrada
var entrada = [1, 2, 3, 4, 5, 6, 7];
var impar = [];
var par = [];

// processamento
entrada.forEach(function (element) {
  if (element % 2 == 0) {
    par.push(element);
  } else {
    impar.push(element);
  }
});

console.log(par);
console.log(impar);

//saida
var impares = impar.length,
  pares = par.length;

console.log(`${impares} ${pares}`);
