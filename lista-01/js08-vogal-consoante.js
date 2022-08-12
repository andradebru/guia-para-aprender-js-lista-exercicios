/**
 * Faça um Programa que verifique se uma letra
 * de entrada é vogal ou consoante.
 *
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
 */

// Entrada
var entrada = "j";

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var vogais = ["a", "e", "i", "o", "u"];
// var vogais = 'aeiou'
// vogais.split('')
var resultado = vogais.includes(entrada) ? "vogal" : "consoante";

console.log(resultado);
