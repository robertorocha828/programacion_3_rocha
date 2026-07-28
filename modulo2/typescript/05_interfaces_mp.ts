type Participante = {
  nombre:    string;
  edad:      number;
  email:     string;
};

function mostrarParticipante(p: Participante): void {
  console.log(`${p.nombre} (${p.edad} años) — ${p.email}`);
}

function validarParticipante(p: Participante): boolean {
  return p.nombre.length > 0 && p.email.includes("@");
}


const roberto: Participante = {
  nombre: "Roberto Rocha",
  edad:   28,
  email:  "robertorocha828@gmail.com"
};

mostrarParticipante(roberto);
console.log(`¿Válido? ${validarParticipante(roberto)}`);


type Nombre    = string;
type Costo     = number;
type Aprobado  = boolean;


type Rol       = "admin" | "catequista" | "secretaria";
type Estado    = "inscrito" | "en_curso" | "completado" | "cancelado";
type Resultado = number | string | null;

type ListaNombres = string[];
type ListaCostos  = number[];

const miNombre: Nombre = "Elida";
const miRol:    Rol    = "catequista";


const estado: Estado = "inscrito";
console.log(`${miNombre} — rol: ${miRol} — estado: ${estado}`);


function puedeEditar(rol: Rol): boolean {
  return rol === "admin" || rol === "secretaria";
}

console.log(puedeEditar("admin"));      
console.log(puedeEditar("catequista"));  




interface Curso {
  id:         number;
  nombre:     string;
  costo:      number;
  cupos:      number;
  sacramento: string;
}


function mostrarCurso(c: Curso): void {
  console.log(`[${c.id}] ${c.nombre} — $${c.costo} (cupos: ${c.cupos})`);
}

function hayCupos(c: Curso): boolean {
  return c.cupos > 0;
}

const cursoBautismo: Curso = {
  id:         1,
  nombre:     "Catequesis Prebautismal",
  costo:      10,
  cupos:      20,
  sacramento: "Bautismo"
};

mostrarCurso(cursoBautismo);
console.log(`¿Hay cupos? ${hayCupos(cursoBautismo)}`);



interface Inscripcion {
  readonly id:    number;     
  nombre:         string;
  sacramento:     string;
  parroquia:      string;
  telefono?:      string;     
  observaciones?: string;
}

const inscripcion1: Inscripcion = {
  id:         1,
  nombre:     "Roberto Rocha",
  sacramento: "Bautismo",
  parroquia:  "San Francisco"
 
};

const inscripcion2: Inscripcion = {
  id:           2,
  nombre:       "Hernán Varas",
  sacramento:   "Confirmación",
  parroquia:    "El Belén",
  telefono:     "0999000111",
  observaciones:"Participante nuevo"
};


console.log(`${inscripcion1.nombre} — tel: ${inscripcion1.telefono ?? "no registrado"}`);
console.log(`${inscripcion2.nombre} — tel: ${inscripcion2.telefono ?? "no registrado"}`);

function mostrarObservaciones(i: Inscripcion): void {
  if (i.observaciones !== undefined) {
    console.log(`${i.nombre}: ${i.observaciones}`);
  } else {
    console.log(`${i.nombre}: sin observaciones`);
  }
}

mostrarObservaciones(inscripcion1);
mostrarObservaciones(inscripcion2);


interface Persona {
  nombre: string;
  edad:   number;
}


interface ParticipanteCurso extends Persona {
  sacramento: string;
  inscrito:   boolean;
}

interface Catequista extends Persona {
  parroquia:    string;
  especialidad: string;
}

const participante: ParticipanteCurso = {
  nombre:     "Roberto Rocha",
  edad:       28,
  sacramento: "Bautismo",
  inscrito:   true
};

const catequista: Catequista = {
  nombre:       "Juan Mora",
  edad:         45,
  parroquia:    "San Francisco",
  especialidad: "Sacramentos de Iniciación"
};

function presentarPersona(p: Persona): void {
  console.log(`${p.nombre} (${p.edad} años)`);
}

presentarPersona(participante);
presentarPersona(catequista);

function mostrarCatequista(c: Catequista): void {
  console.log(`${c.nombre} — ${c.parroquia} — ${c.especialidad}`);
}

mostrarCatequista(catequista);
