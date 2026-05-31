// Comentario de una sola línea

/*
   Comentario
   de múltiples
   líneas
*/

/**
 * Comentario JSDoc — documentación de funciones
 * Equivalente a Javadoc o KDoc
 *
 * @param {string} nombre - El nombre del participante
 * @returns {string} Un saludo personalizado de bienvenida al curso
 */
function saludar(nombre) {
  return `Hola, ${nombre}. Bienvenido al sistema de Control de Cursos de Sacramentos de la Iglesia Católica.`;
}

console.log(saludar("Roberto"));

