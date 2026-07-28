const estadoInscripcion = "aprobada";

switch (estadoInscripcion) {
  case "pendiente":
    console.log("📋 Inscripción registrada. En espera de documentos.");
    break;
  case "aprobada":
    console.log("✅ Inscripción aprobada. El curso comenzará pronto.");
    break;
  case "en_curso":
    console.log("📚 Participante activo en el curso.");
    break;
  case "completado":
    console.log("🎓 Curso completado. Certificado listo para retiro.");
    break;
  case "cancelada":
    console.log("❌ Inscripción cancelada. Contactar a secretaría parroquial.");
    break;
  default:
    console.log(`Estado desconocido: "${estadoInscripcion}". Contactar soporte.`);
}



const diaSemana = 3; // 1=Lunes ... 7=Domingo

switch (diaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día laboral — secretaría parroquial: 08:00 a 17:00");
    break;
  case 6:
    console.log("Sábado — cursos de catequesis: 09:00 a 13:00");
    break;
  case 7:
    console.log("Domingo — misas y ceremonias. Secretaría cerrada.");
    break;
  default:
    console.log("Número de día no válido (usar 1-7)");
}


const tipoSacramento = "confirmacion";
let requisitos;
let duracion;

switch (tipoSacramento) {
  case "bautismo":
    requisitos = "Partida de nacimiento y cédula de padres";
    duracion   = "2 sesiones";
    break;
  case "primera_comunion":
  case "comunion":
    requisitos = "Certificado de bautismo";
    duracion   = "1 año";
    break;
  case "confirmacion":
    requisitos = "Certificado de Primera Comunión";
    duracion   = "6 meses";
    break;
  case "matrimonio":
    requisitos = "Certificado de bautismo y confirmación de ambos";
    duracion   = "3 semanas";
    break;
  default:
    requisitos = "Consultar en secretaría parroquial";
    duracion   = "Por definir";
}

console.log(`Sacramento: ${tipoSacramento}`);
console.log(`Requisitos: ${requisitos}`);
console.log(`Duración: ${duracion}`);

