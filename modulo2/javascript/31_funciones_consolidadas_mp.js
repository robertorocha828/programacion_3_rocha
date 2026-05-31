const prompt = require("prompt-sync")();

const calcularSubtotal  = (costo, participantes) => costo * participantes;
const calcularDescuento = (subtotal, esGrupo)    => esGrupo ? subtotal * 0.10 : 0;
const calcularTotal     = (subtotal, descuento)  => subtotal - descuento;

+function calcularCurso(costo, participantes, esGrupo) {
  const operaciones = {
    subtotal:  () => calcularSubtotal(costo, participantes),
    descuento: () => calcularDescuento(calcularSubtotal(costo, participantes), esGrupo),
    total:     () => calcularTotal(
                       calcularSubtotal(costo, participantes),
                       calcularDescuento(calcularSubtotal(costo, participantes), esGrupo)
                     )
  };
  return {
    subtotal:  operaciones.subtotal(),
    descuento: operaciones.descuento(),
    total:     operaciones.total()
  };
}

function leerNumero(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Entrada no válida, intenta de nuevo.");
  }
}

console.log("=== Calculadora de costos de curso de sacramentos ===");

const costo         = leerNumero("Costo del curso por persona ($): ");
const participantes = leerNumero("Número de participantes: ");
const grupoTexto    = prompt("¿Es grupo de 5 o más? (S/N): ");
const esGrupo       = grupoTexto.toUpperCase() === "S";

const resultado = calcularCurso(costo, participantes, esGrupo);

console.log(`
Subtotal:  $${resultado.subtotal.toFixed(2)}
Descuento: $${resultado.descuento.toFixed(2)}
Total:     $${resultado.total.toFixed(2)}
`);
