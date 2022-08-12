/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par'
 *
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

// Entrada
var entrada = [1, 3, 5, 7, 8];
var saida = "";
entrada.forEach(function (elemento) {
  var parimpar = elemento % 2 == 0 ? "'par'" : "'impar'";
  saida += parimpar + ", ";
});

// gerar a lista de saida
// saida = ['impar', 'impar', 'impar', 'impar', 'par']

console.log(saida);
