const prompt = require("prompt-sync")();

console.log("=== Calculadora de costos de curos de sacramentos ===");

const aTexto = prompt("Costo del curso ($): ");
const bTexto = prompt("Número de participantes: ");

const a = parseFloat(aTexto) || 0;
const b = parseFloat(bTexto) || 0;

const total       = a * b;
const descuento   = b >= 10 ? total * 0.10 : 0;
const totalFinal  = total - descuento;

console.log(`
Resultados para ${b} participantes a $${a} c/u:
  Subtotal:   $${total.toFixed(2)}
  Descuento:  $${descuento.toFixed(2)}
  Total:      $${totalFinal.toFixed(2)}
`);
