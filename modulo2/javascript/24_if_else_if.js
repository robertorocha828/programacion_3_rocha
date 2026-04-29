const temperatura = 28; // grados Celsius

if (temperatura >= 35) {
  console.log("🌡️ Calor extremo. Evitar actividad al aire libre.");
} else if (temperatura >= 25) {
  console.log("☀️ Temperatura cálida. Condiciones ideales para exteriores.");
} else if (temperatura >= 15) {
  console.log("🌤️ Temperatura agradable. Llevar una chaqueta ligera.");
} else if (temperatura >= 5) {
  console.log("🧥 Temperatura fría. Abrigarse bien.");
} else {
  console.log("❄️ Temperatura bajo cero. Riesgo de heladas.");
}
// ☀️ Temperatura cálida. Condiciones ideales para exteriores.

const pesoKg = 4.5;
const TARIFA_LIGERO   = 2.50;
const TARIFA_MEDIANO  = 5.00;
const TARIFA_PESADO   = 9.00;
const TARIFA_ESPECIAL = 15.00;

let costoEnvio;
let categoriaPeso;

if (pesoKg <= 1) {
  costoEnvio    = TARIFA_LIGERO;
  categoriaPeso = "Ligero";
} else if (pesoKg <= 5) {
  costoEnvio    = TARIFA_MEDIANO;
  categoriaPeso = "Mediano";
} else if (pesoKg <= 20) {
  costoEnvio    = TARIFA_PESADO;
  categoriaPeso = "Pesado";
} else {
  costoEnvio    = TARIFA_ESPECIAL;
  categoriaPeso = "Especial — requiere gestión manual";
}

console.log(`Paquete: ${pesoKg} kg`);
console.log(`Categoría: ${categoriaPeso}`);
console.log(`Costo de envío: $${costoEnvio.toFixed(2)}`);
// Paquete: 4.5 kg
// Categoría: Mediano
// Costo de envío: $5.00

const nota = 78; // sobre 100

let calificacion;
let aprobado;

if (nota >= 90) {
  calificacion = "A — Excelente";
  aprobado     = true;
} else if (nota >= 80) {
  calificacion = "B — Muy bueno";
  aprobado     = true;
} else if (nota >= 70) {
  calificacion = "C — Bueno";
  aprobado     = true;
} else if (nota >= 60) {
  calificacion = "D — Suficiente";
  aprobado     = true;
} else {
  calificacion = "F — Reprobado";
  aprobado     = false;
}

console.log(`Nota: ${nota}/100`);
console.log(`Calificación: ${calificacion}`);
console.log(`Estado: ${aprobado ? "Aprobado ✅" : "Reprobado ❌"}`);
// Nota: 78/100
// Calificación: C — Bueno
// Estado: Aprobado ✅

// ejercio en clase
//pide el consumo de energia:
// <=100: consumo bajo 
// <=300 conaumo meido
// 300 consumo alto

const prompt = require("prompt-sync")();

const energia = prompt("Ingre el consumo de energia");
if(energia <= 100){
  console.log("Consumo Bajo")
}else if(energia <=300){
  console.log("Consumo medio")
}else{
  console.log("Consumno alto")
}


// //solicite el sueldo
// <500 sueldo basico
// entre 500 y 1000 sueldo MediaSource
// 1000 sueldo alto
const sueldo = require("prompt-sync")();
const sueldo1 = sueldo("Ingre el sueldo");
const sueldo2 = parseFloat(sueldo1)

if (sueldo2 < 500){
  console.log("Sueldo basico")
}else if (sueldo2 >= 500 && sueldo2 <= 100){
  console.log("Sueldo medio")
}else{
  console.log("Sueldo alto")
}

//ingrese el dia de la semana
// 1-5 dia laboral
// 6 sabado
// 7 domingo
const dia = sueldo("Ingre el sueldo");
const dia1 = parseFloat(dia)

if (dia1 < 500){
  console.log("Sueldo basico")
}else if (sueldo2 >= 500 && sueldo2 <= 100){
  console.log("Sueldo medio")
}else{
  console.log("Sueldo alto")
}
