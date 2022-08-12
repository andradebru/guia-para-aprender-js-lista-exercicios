/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA          SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = "J";
var entradaTratada = entrada.toLowerCase();
var positivos = ["yes", "y", "sim", "s", 1, "👍"];
// var negativos = ["nao", "n", " ", "j", 0];

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
// se entrada estiver na lista positivo, imprime true, se nao estiver imprime false

var resultado = positivos.includes(entrada) ? true : false;

console.log(resultado);
