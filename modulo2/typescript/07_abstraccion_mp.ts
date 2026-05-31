class RegistroCurso {
  private estado:    string;
  private historial: string[] = [];

  constructor(participante: string, sacramento: string) {
    this.estado = "pendiente";
    this.historial.push(`Inscripción creada: ${participante} — ${sacramento}`);
    console.log(`Registro de ${participante} para ${sacramento} creado.`);
  }

  aprobar(): void {
    this.estado = "aprobado";
    this.registrar("Inscripción aprobada");
    console.log(`  Estado actualizado: ${this.estado}`);
  }

  cancelar(): void {
    if (this.estado === "completado") {
      console.log("  No se puede cancelar: el curso ya fue completado.");
      return;
    }
    this.estado = "cancelado";
    this.registrar("Inscripción cancelada");
    console.log(`  Estado actualizado: ${this.estado}`);
  }

  completar(): void {
    this.estado = "completado";
    this.registrar("Curso completado exitosamente");
    console.log(`  Estado actualizado: ${this.estado}`);
  }

  consultarEstado(): string {
    return this.estado;
  }

  verHistorial(): void {
    console.log("\n  Historial:");
    this.historial.forEach(h => console.log(`    ${h}`));
  }


  private registrar(evento: string): void {
    this.historial.push(evento);
  }
}

console.log("=== REGISTRO DE CURSO ===\n");
const registro = new RegistroCurso("Roberto Rocha", "Bautismo");

registro.aprobar();
registro.completar();
registro.cancelar();  

console.log(`\nEstado actual: ${registro.consultarEstado()}`);
registro.verHistorial();

