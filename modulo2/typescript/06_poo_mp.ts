class Participante {
  nombre:    string;
  sacramento: string;

  constructor(nombre: string, sacramento: string) {
    this.nombre    = nombre;
    this.sacramento = sacramento;
  }

  presentar(): string {
    return `Hola, soy ${this.nombre} y me inscribo en ${this.sacramento}.`;
  }

  cambiarSacramento(nuevoSacramento: string): void {
    this.sacramento = nuevoSacramento;
    console.log(`${this.nombre} cambió su sacramento a: ${this.sacramento}.`);
  }
}


const roberto  = new Participante("Roberto Rocha",   "Bautismo");
const ivan = new Participante("Ivan Ayala", "Confirmación");

console.log(roberto.presentar());
console.log(ivan.presentar());
roberto.cambiarSacramento("Primera Comunión");
console.log(ivan.presentar());


class Participante2 {
  nombre:    string;
  sacramento: string;

  constructor(nombre: string, sacramento: string) {
    this.nombre    = nombre;
    this.sacramento = sacramento;
  }

  presentar(): string {
    return `Hola, soy ${this.nombre} y me inscribo en ${this.sacramento}.`;
  }

  cambiarSacramento(nuevoSacramento: string): void {
    this.sacramento = nuevoSacramento;
    console.log(`${this.nombre} cambió su sacramento a: ${this.sacramento}.`);
  }
}


const christian  = new Participante("Christian Cañar",   "Bautismo");
const hernan = new Participante("Hernán Varas", "Confirmación");

console.log(christian.presentar());
console.log(hernan.presentar());
christian.cambiarSacramento("Primera Comunión");
console.log(hernan.presentar());
