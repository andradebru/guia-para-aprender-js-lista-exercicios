/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150.
 *
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 *
 */

// Entrada
var range = [1, 150];

var impares = [];
var pares = [];

for (i in range) {
  if (i % 2 != 0) {
    impares.push(i);
  } else {
    pares.push(i);
  }
  i++;
}

console.log(impares);
