const horaActual = 16; 

if (horaActual < 12) {
  console.log("Buenos días. Turno de mañana activo.");
} else {
  console.log("Buenas tardes. Turno de tarde activo.");
}


const bautizado    = true;
const confirmado   = true;
const EDAD_MINIMA  = 18;
const edadNovio    = 20;

if (bautizado && confirmado && edadNovio >= EDAD_MINIMA) {
  console.log("Inscripción al curso prematrimonial aprobada.");
  console.log(`Edad verificada: ${edadNovio} años.`);
} else {
  console.log("No cumple los requisitos para el curso de Matrimonio.");
  console.log(`Requisitos: bautizado, confirmado y mayor de ${EDAD_MINIMA} años.`);
}


const cedulaIngresada = "1750135848";
const cedulaCorrecta  = "1750135849";
let intentosFallidos  = 0;
const MAX_INTENTOS    = 3;

if (cedulaIngresada === cedulaCorrecta) {
  console.log("Cédula verificada. Acceso al sistema concedido.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(`Cédula incorrecta. Intentos restantes: ${intentosRestantes}`);
  console.log(`Intentos fallidos: ${intentosFallidos}`);
}



const prompt = require("prompt-sync")();
const sesiones = prompt("Ingrese el número de sesiones asistidas: ");
if (sesiones >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}


const cedulaCorrecta1 = "1750135848";
const prompt1 = require("prompt-sync")();
const cedulaIngresada1 = prompt1("Ingrese su cédula: ");
if (cedulaIngresada1 === cedulaCorrecta1) {
  console.log("Participante encontrado");
} else {
  console.log("Participante no encontrado");
}

const prompt2 = require("prompt-sync")();
const hora = prompt2("Ingrese la hora (formato 0-23): ");
if (hora < 12) {
  console.log("Buenos días");
} else {
  console.log("Buenas tardes/noche");
}
