const sesionesAsistidas = 7; 
if (sesionesAsistidas >= 10) {
  console.log("🏅 Asistencia perfecta. Certificado con distinción.");
} else if (sesionesAsistidas >= 8) {
  console.log("✅ Asistencia excelente. Curso aprobado.");
} else if (sesionesAsistidas >= 6) {
  console.log("✅ Asistencia suficiente. Curso aprobado.");
} else if (sesionesAsistidas >= 4) {
  console.log("⚠️ Asistencia baja. Debe recuperar sesiones.");
} else {
  console.log("❌ Asistencia insuficiente. Debe reiniciar el curso.");
}



const edadParticipante  = 15;
const TARIFA_NINO       = 5.00;
const TARIFA_JOVEN      = 10.00;
const TARIFA_ADULTO     = 15.00;
const TARIFA_ADULTO_MAYOR = 8.00;

let tarifaCurso;
let categoriaEdad;

if (edadParticipante <= 12) {
  tarifaCurso   = TARIFA_NINO;
  categoriaEdad = "Niño";
} else if (edadParticipante <= 17) {
  tarifaCurso   = TARIFA_JOVEN;
  categoriaEdad = "Joven";
} else if (edadParticipante <= 64) {
  tarifaCurso   = TARIFA_ADULTO;
  categoriaEdad = "Adulto";
} else {
  tarifaCurso   = TARIFA_ADULTO_MAYOR;
  categoriaEdad = "Adulto mayor";
}

console.log(`Participante: ${edadParticipante} años`);
console.log(`Categoría: ${categoriaEdad}`);
console.log(`Costo del curso: $${tarifaCurso.toFixed(2)}`);



const porcentajeAsistencia = 78; 

let calificacion;
let estadoCurso;

if (porcentajeAsistencia >= 95) {
  calificacion = "A — Excelente";
  estadoCurso  = true;
} else if (porcentajeAsistencia >= 85) {
  calificacion = "B — Muy bueno";
  estadoCurso  = true;
} else if (porcentajeAsistencia >= 80) {
  calificacion = "C — Bueno";
  estadoCurso  = true;
} else if (porcentajeAsistencia >= 70) {
  calificacion = "D — Suficiente";
  estadoCurso  = true;
} else {
  calificacion = "F — Reprobado";
  estadoCurso  = false;
}

console.log(`Asistencia: ${porcentajeAsistencia}%`);
console.log(`Calificación: ${calificacion}`);
console.log(`Estado: ${estadoCurso ? "Aprobado ✅" : "Reprobado ❌"}`);


const prompt = require("prompt-sync")();

const asistencia = prompt("Ingrese el porcentaje de asistencia: ");
if (asistencia >= 90) {
  console.log("Asistencia excelente");
} else if (asistencia >= 80) {
  console.log("Asistencia buena");
} else {
  console.log("Asistencia insuficiente");
}


const costoPrompt = require("prompt-sync")();
const costo1 = costoPrompt("Ingrese el costo del curso de Sacramento: ");
const costo2 = parseFloat(costo1);

if (costo2 < 10) {
  console.log("Costo bajo");
} else if (costo2 >= 10 && costo2 <= 25) {
  console.log("Costo medio");
} else {
  console.log("Costo alto");
}


const sacPrompt = require("prompt-sync")();
const numSacramento = parseFloat(sacPrompt("Ingrese el número del sacramento (1-7): "));

if (numSacramento >= 1 && numSacramento <= 3) {
  console.log("Bautizo");
} else if (numSacramento >= 4 && numSacramento <= 5) {
  console.log("Comunión");
} else {
  console.log("Confirmación");
}
