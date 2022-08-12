/**
 * Faça um Programa que imprima a soma de dois numeros (inteiros ou com casas decimais).
 * Se os valores de entrada não forem números válidos, imprima uma mensagem de aviso.
 *
 * ENTRADA                           SAÍDA
 *    10 e 20                        30
 *    40.5 e 1.5                     42
 *    40,5 e 1,5                     42
 *    A e 40                         'A' não é um número
 *    40 e A                         'A' não é um número
 *
 * DICA:
 * Para verificar se A não número use o console o node e debug isto...
 * qual é o typeof 'A'? qual o typeof 42?
 * qual é o typeof(typeof A)
 */

// Entrada
var n1 = parseInt("A");
var n2 = parseInt(40);

// se n1 ou n2 for string printa "não é um número"
// if (isNaN(n1) || isNaN(n2)) {
if (isNaN(n1, n2)) {
  console.log("não é um número");
} else {
  console.log(n1 + n2);
}

// Saída
// var resultado = "?";

// console.log(resultado);
