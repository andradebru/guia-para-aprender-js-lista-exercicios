/**
 * Faça um Programa que inverta um texto.
 *
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 *
 */

// Entrada
var entrada = "abacate";

// MODO 1
// function inverteString(str) {
//   var splitString = str.split(""); //separa as letras da string
//   var arrayInvertida = splitString.reverse(); //inverte
//   var juntaArray = arrayInvertida.join(""); //junta tudo de novo numa nova string
//   return juntaArray; //retorna a nova string
// }

// gere a variável invertido de forma a transforma a entrada na saída esperada
// var invertido = inverteString(entrada);

/* MODO 2
function inverteString(str) {
  return str.split("").reverse().join("");
}
var invertido = inverteString(entrada);
*/

// /* MODO 3
var novaString = "";
for (var letra = entrada.length - 1; letra >= 0; letra--) {
  novaString += entrada[letra];
}
var invertido = novaString;
// */

// /* MODO 3 alt
// var novaString = "";
// entrada.forEach(function (letra) {
//   novaString += letra;
// });
// */

console.log(invertido);
