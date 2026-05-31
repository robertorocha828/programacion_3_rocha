class Persona {
  constructor(
    protected nombre: string,
    protected edad:   number
  ) {}

  presentar(): void {
    console.log(`  ${this.nombre} tiene ${this.edad} años.`);
  }

  despedir(): void {
    console.log(`  Hasta pronto, ${this.nombre}.`);
  }

  toString(): string {
    return `${this.nombre} (${this.edad} años)`;
  }
}

class Participante extends Persona {
  private sacramento: string;

  constructor(nombre: string, edad: number, sacramento: string) {
    super(nombre, edad); 
    this.sacramento = sacramento;
  }

  inscribirse(): void {
    console.log(`  ${this.nombre} se inscribe en: ${this.sacramento}.`);
  }

  toString(): string {
    return `${super.toString()} — ${this.sacramento}`; 
  }
}

class Catequista extends Persona {
  private parroquia: string;

  constructor(nombre: string, edad: number, parroquia: string) {
    super(nombre, edad);
    this.parroquia = parroquia;
  }

  impartirClase(): void {
    console.log(`  ${this.nombre} imparte clase en ${this.parroquia}.`);
  }

  toString(): string {
    return `${super.toString()} — Parroquia: ${this.parroquia}`;
  }
}

console.log("=== HERENCIA ===\n");

const roberto    = new Participante("Roberto Rocha",  28, "Bautismo");
const catequista = new Catequista("Juan Mora",    45, "San Francisco");

// Métodos heredados del padre
roberto.presentar();
catequista.presentar();
roberto.despedir();

// Métodos propios de cada hijo
roberto.inscribirse();
catequista.impartirClase();

console.log(`\nRoberto:     ${roberto.toString()}`);
console.log(`Catequista: ${catequista.toString()}`);

// instanceof — comprobar si un objeto pertenece a una clase
console.log(`\n¿Roberto es Participante? ${roberto instanceof Participante}`);     
console.log(`¿Roberto es Persona?       ${roberto instanceof Persona}`);           
console.log(`¿Roberto es Catequista?    ${roberto instanceof Catequista}`);        
const personaBase = new Persona("Carlos Ortega", 30);
