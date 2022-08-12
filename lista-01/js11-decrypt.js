/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbduf           abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = "bcbdbuf";

// implemente aqui uma lógica para descriptografar o texto

var textoDecripto = "";

for (const letra of texto) {
  if (letra === "@") {
    textoDecripto += "z";
  } else if (letra === "$") {
    textoDecripto += "Z";
  } else {
    textoDecripto += String.fromCharCode(letra.charCodeAt(0) - 1);
  }
}

console.log(textoDecripto);
