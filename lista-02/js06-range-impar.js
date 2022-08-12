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

for (let index = 1; index < 151; index++) {
  if (index % 2 != 0) {
    impares.push(index);
  }
}

console.log(impares);
