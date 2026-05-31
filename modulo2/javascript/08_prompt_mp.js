const prompt = require("prompt-sync")();

const nombre = prompt("Escribe tu nombre para inscribirte: ");
console.log(`Hola, ${nombre}! Bienvenido al sistema de Control de Cursos de Sacramentos de la Iglesia Católica.`);

const sesionesTexto = prompt("¿Cuántas sesiones has asistido? ");
const sesiones = parseInt(sesionesTexto, 10);

if (isNaN(sesiones)) {
  console.log("Eso no es un número válido.");
} else {
  console.log(`Has asistido a ${sesiones} sesiones.`);
}
