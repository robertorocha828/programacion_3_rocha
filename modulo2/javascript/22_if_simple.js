const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
  const descuento = totalCompra * PORCENTAJE_DESCUENTO;
  totalFinal = totalCompra - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00

const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
  console.log(`⚠️ Stock bajo: quedan ${stockDisponible} unidades. Reabastecer pronto.`);
}


const edadUsuario = 17;
const EDAD_MINIMA = 18;

if (edadUsuario < EDAD_MINIMA) {
  console.log("Acceso denegado: debes ser mayor de edad para registrarte.");
}

console.log("Registro finalizado.");
// Acceso denegado: debes ser mayor de edad para registrarte.
// Registro finalizado.



// ejercio en clase
// Solicitar el monto de una compra. Si el monto es mayor a 100, muestra: "Aplica descuentto"
const prompt = require("prompt-sync")();
const monto = prompt("Ingres el monto de compra: ");
console.log(`El monto de compra es, ${monto}!`);
if (monto > 100){
    console.log("Aplica descuento");
}

// Pida la velocidad de un vehiculo. si supera los 90 km muestre: Exceso de velocidad
const prompt1 = require("prompt-sync")();
const velocidad = prompt("Ingrese la velocidad del vehiculo: ");
if(velocidad >90){
    console.log("Exceso de velocidad");
}

// Ingrese el numero de asisitencia de un estudiante. si es menor a 70, muestre Pierde por falta 
const prompt2 = require("prompt-sync")();
const asistecia = prompt("ingrese el numero de asistencias: ");
if (asistecia < 70){
    console.log("Pierde la materia por faltas")
}