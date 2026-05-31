class Participante {
  private _nombre:    string;
  private _sesiones:  number;
  private _email:     string;

  constructor(nombre: string, sesiones: number, email: string) {
    this._nombre   = nombre;
    this._sesiones = sesiones;
    this._email    = email;
  }

  get nombre():   string { return this._nombre; }
  get sesiones(): number { return this._sesiones; }
  get email():    string { return this._email; }

  set nombre(valor: string) {
    if (valor.trim().length < 2) {
      throw new Error("El nombre debe tener al menos 2 caracteres.");
    }
    this._nombre = valor.trim();
  }

  set sesiones(valor: number) {
    if (valor < 0) {
      throw new Error("El número de sesiones no puede ser negativo.");
    }
    this._sesiones = valor;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email no es válido.");
    }
    this._email = valor.toLowerCase();
  }

  toString(): string {
    return `${this._nombre} — ${this._sesiones} sesiones — ${this._email}`;
  }
}

console.log("=== ENCAPSULAMIENTO ===\n");
const participante = new Participante("Roberto Rocha", 4, "robertorocha828@gmail.com");
console.log(participante.toString());


participante.sesiones = 8;
participante.email    = "robertorocha828@gmail.com";
console.log(`Sesiones actualizadas: ${participante.sesiones}`);

try {
  participante.sesiones = -3;
} catch (e) {
  console.log(`Error al actualizar sesiones: ${(e as Error).message}`);
}

try {
  participante.email = "emailsinrobadillo";
} catch (e) {
  console.log(`Error al actualizar email: ${(e as Error).message}`);
}
