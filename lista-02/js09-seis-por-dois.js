/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 *
 */

// Entrada
var dia = new Date();
var diasParaFolgar = 5;
var meses = 3;

dia.setDate(dia.getDate() + diasParaFolgar);
console.log(dia.toLocaleDateString());
dia.setDate(dia.getDate() + 1);
console.log(dia.toLocaleDateString());

for (x = 0; x < meses * 4; x++) {
  console.log("\nDias trabalhados:");
  for (i = 0; i < 6; i++) {
    dia.setDate(dia.getDate() + 1);
    console.log(dia.toLocaleDateString());
  }

  console.log("\nDias de folga:");
  for (i = 0; i < 2; i++) {
    dia.setDate(dia.getDate() + 1);
    console.log(dia.toLocaleDateString());
  }
}

// Pŕoxima volta

// Saída com base na próxima folga, calcular dia de trabalho/folga
