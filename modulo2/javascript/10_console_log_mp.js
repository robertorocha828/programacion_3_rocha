console.log("Bienvenido al sistema de Control de Cursos de Sacramentos de la Iglesia Católica");
console.log("Sesiones completadas:", 2);
console.log("Datos del participante:", "Roberto", "Rohca", "Confirmación");

console.error("Error: participante no encontrado en el sistema");

console.warn("Atención: asistencia por debajo del 80% requerido");

console.table([
  { nombre: "Roberto Rocha",   sacramento: "Confirmación",       estado: "Completado" },
  { nombre: "Ricardo Rocha", sacramento: "Matrimonio",   estado: "En curso"   }
]);

const sesiones = 2;
const participante = "Roberto Rocha";
console.log(`Participante: ${participante}, sesiones: ${sesiones}`);