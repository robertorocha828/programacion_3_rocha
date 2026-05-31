// polimorfismo.ts

// Clase abstracta — no se puede instanciar directamente
// Solo sirve como base para otras clases
abstract class Curso {
  constructor(protected nombre: string) {}

  // Método abstracto — CADA subclase DEBE implementarlo a su manera
  abstract calcularCosto(): number;
  abstract calcularDuracion(): number;

  // Método concreto — igual para todos los cursos
  describir(): string {
    return `${this.constructor.name} — ${this.nombre}: ` +
           `costo=$${this.calcularCosto().toFixed(2)}, duración=${this.calcularDuracion()} sesiones`;
  }
}

class CursoBautismo extends Curso {
  constructor(nombre: string, private numParticipantes: number) {
    super(nombre);
  }

  // Cada clase implementa calcularCosto() A SU MANERA
  calcularCosto(): number     { return 10 * this.numParticipantes; }
  calcularDuracion(): number  { return 2; }
}

class CursoConfirmacion extends Curso {
  constructor(nombre: string, private meses: number) {
    super(nombre);
  }

  calcularCosto(): number     { return 20 * this.meses; }
  calcularDuracion(): number  { return this.meses * 4; }
}

class CursoMatrimonio extends Curso {
  constructor(nombre: string, private parejas: number, private incluye_retiro: boolean) {
    super(nombre);
  }

  calcularCosto(): number {
    const base = 30 * this.parejas;
    return this.incluye_retiro ? base + 50 : base;
  }
  calcularDuracion(): number { return 6; }
}

console.log("=== POLIMORFISMO ===\n");

// Un array con distintos tipos — todos son Curso
const cursos: Curso[] = [
  new CursoBautismo("Prebautismal Quito",      10),
  new CursoConfirmacion("Confirmación 2026",   6),
  new CursoMatrimonio("Prematrimonial",        5, true),
  new CursoBautismo("Prebautismal El Belén",   8),
];

// El mismo bucle llama a describir() en cada curso
// Sin saber si es Bautismo, Confirmación o Matrimonio
for (const curso of cursos) {
  console.log(`  ${curso.describir()}`);
}

// Calcular el costo total — funciona con cualquier tipo de Curso
const costoTotal = cursos.reduce((acc, c) => acc + c.calcularCosto(), 0);
console.log(`\n  Costo total: $${costoTotal.toFixed(2)}`);

// new Curso("nombre");  // ❌ Error — Curso es abstracto, no se puede instanciar
