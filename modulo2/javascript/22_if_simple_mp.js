const sesionesAsistidas = 8;
const MINIMO_SESIONES   = 6;
const PORCENTAJE_MINIMO = 0.80;

let aprobado = false;

if (sesionesAsistidas >= MINIMO_SESIONES) {
  aprobado = true;
  console.log(`✅ Asistencia suficiente: ${sesionesAsistidas} sesiones.`);
}

console.log(`Estado: ${aprobado ? "Aprobado" : "Reprobado"}`);


const cuposDisponibles = 3;
const UMBRAL_CUPOS     = 5;

if (cuposDisponibles <= UMBRAL_CUPOS) {
  console.log(`⚠️ Cupos bajos: quedan ${cuposDisponibles} lugares. Inscríbete pronto.`);
}

const edadParticipante = 15;
const EDAD_MINIMA      = 16;

if (edadParticipante < EDAD_MINIMA) {
  console.log("Acceso denegado: debes tener al menos 16 años para inscribirte en Confirmación.");
}

console.log("Proceso de verificación finalizado.");




const prompt = require("prompt-sync")();
const sesiones = prompt("Ingresa el número de sesiones asistidas: ");
console.log(`Sesiones asistidas: ${sesiones}`);
if (sesiones > 6) {
  console.log("Cumple el mínimo de asistencia");
}

const prompt1 = require("prompt-sync")();
const edad = prompt1("Ingrese la edad del participante: ");
if (edad < 16) {
  console.log("No cumple la edad mínima");
}

const prompt2 = require("prompt-sync")();
const asistencia = prompt2("Ingrese el porcentaje de asistencia: ");
if (asistencia < 80) {
  console.log("Pierde el curso por faltas");
}
