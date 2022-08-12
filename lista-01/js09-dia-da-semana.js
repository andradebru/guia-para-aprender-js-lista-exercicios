/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 *
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 5;

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
//da pra fazer com if else if ou switch case

var semana = {
  1: "Domingo",
  2: "Segunda",
  3: "Terça",
  4: "Quarta",
  5: "Quinta",
  6: "Sexta",
  7: "Sábado",
};

var resultado = entrada in semana ? semana[entrada] : "Entrada inválida";

console.log(resultado);
