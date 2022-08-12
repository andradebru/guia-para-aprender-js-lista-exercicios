/**
 * Faça um programa que mostre o segundo maior número da lista
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 *
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var entrada = [40, 42, 1, 0, -10];
var ordenada = [];
var maior = 0;
var segundoMaior = 0;

for (const num of entrada) {
  if (num > maior) {
    maior = num;
  }

  for (const num of entrada) {
    if (num > segundoMaior && num < maior) {
      segundoMaior = num;
    }
  }
}

console.log(segundoMaior);
