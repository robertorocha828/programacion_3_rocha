const cuposDisponibles = 8;
const estadoCupos = cuposDisponibles > 0 ? "Disponible" : "Agotado";
console.log(`Estado: ${estadoCupos}`);   


const costoCurso      = 20.00;
const numParticipantes = 3;
const totalCurso       = costoCurso * numParticipantes;

console.log(`Curso: ${numParticipantes} participante(s) x $${costoCurso}`);
console.log(`Total: $${totalCurso.toFixed(2)}`);
console.log(`Descuento grupal: ${numParticipantes >= 5 ? "Sí ✅" : "No ❌ (mínimo 5 personas)"}`);


const sesionesAsistidas = 5;
const estadoParticipante = sesionesAsistidas >= 6 ? "Aprobado" : "Pendiente";
const colorEstado        = sesionesAsistidas >= 6 ? "verde" : "rojo";
console.log(`[${colorEstado.toUpperCase()}] Estado: ${estadoParticipante}`);


const edad = 17;
const categoriaSacramento1 = edad >= 18 ? "adulto" : edad >= 16 ? "joven" : "niño";


let categoriaSacramento;
if (edad >= 18) {
  categoriaSacramento = "adulto";
} else if (edad >= 16) {
  categoriaSacramento = "joven";
} else {
  categoriaSacramento = "niño";
}
