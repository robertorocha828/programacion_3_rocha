console.log("Ciclo for");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const sacramentos = ["Bautismo", "Comunión", "Confirmación"];
for (let i = 0; i < sacramentos.length; i++) {
  console.log(sacramentos[i]);
}

for (let sacramento of sacramentos) {
  console.log(sacramento);
}



const participantes = [
  { codigo: "P01", nombre: "Diana Delgado",    sesiones: 2  },
  { codigo: "P02", nombre: "Carlos Rocha",  sesiones: 8  },
  { codigo: "P03", nombre: "Elida Delgado",     sesiones: 0  },
  { codigo: "P04", nombre: "Hernán Varas",      sesiones: 6  },
  { codigo: "P05", nombre: "Sofía Criollo",   sesiones: 1  },
];

const SESIONES_MINIMAS = 3;

console.log("=== Reporte de participantes ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Nombre".padEnd(16)} Sesiones  Estado`);
console.log("─".repeat(52));

for (let i = 0; i < participantes.length; i++) {
  const p      = participantes[i];
  const numero = String(i + 1).padStart(2, "0");

  let estado;
  if (p.sesiones === 0) {
    estado = "🔴 NINGUNA";
  } else if (p.sesiones < SESIONES_MINIMAS) {
    estado = "🟡 BAJO";
  } else {
    estado = "🟢 OK";
  }

  console.log(
    `${numero}.  ${p.codigo.padEnd(6)} ${p.nombre.padEnd(16)} ` +
    `${String(p.sesiones).padStart(3)}s   ${estado}`
  );
}




const reporteCursos = [
  { catequista: "María F.",   inscritos: 20, parroquia: "Norte" },
  { catequista: "Juan M.",    inscritos: 35, parroquia: "Sur"   },
  { catequista: "Rosa D.",    inscritos: 12, parroquia: "Norte" },
  { catequista: "Pedro L.",   inscritos: 28, parroquia: "Sur"   },
  { catequista: "Sofía R.",   inscritos: 9,  parroquia: "Centro Norte"  },
];

const META_INSCRITOS = 15;
let totalGeneral     = 0;
let catequistasEnMeta = 0;

console.log("=== Resumen de cursos ===");

for (const curso of reporteCursos) {
  totalGeneral += curso.inscritos;

  const cumpleMeta = curso.inscritos >= META_INSCRITOS;
  if (cumpleMeta) {
    catequistasEnMeta++;
  }

  const indicador = cumpleMeta ? "✅" : "⚠️";
  console.log(
    `${indicador} ${curso.catequista.padEnd(10)} ` +
    `[${curso.parroquia.padEnd(5)}]  ` +
    `${curso.inscritos} inscritos`
  );
}

console.log("─".repeat(38));
console.log(`Total inscritos:       ${totalGeneral}`);
console.log(`En meta (≥${META_INSCRITOS}): ${catequistasEnMeta}/${reporteCursos.length} catequistas`);



const texto   = "Sacramento de Bautismo";
const VOCALES = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]);
let conteoVocales     = 0;
let conteoConsonantes = 0;
let conteoEspacios    = 0;

for (const caracter of texto.toLowerCase()) {
  if (caracter === " ") {
    conteoEspacios++;
  } else if (VOCALES.has(caracter)) {
    conteoVocales++;
  } else if (caracter >= "a" && caracter <= "z") {
    conteoConsonantes++;
  }
}

console.log(`Texto: "${texto}"`);
console.log(`Vocales:     ${conteoVocales}`);
console.log(`Consonantes: ${conteoConsonantes}`);
console.log(`Espacios:    ${conteoEspacios}`);
console.log(`Total letras:${conteoVocales + conteoConsonantes}`);



const sacramentosTop = ["Bautismo", "Primera Comunión", "Confirmación", "Matrimonio", "Unción"];

console.log("=== Top 5 sacramentos más solicitados ===");

for (const [posicion, sacramento] of sacramentosTop.entries()) {
  const medalla =
    posicion === 0 ? "🥇" :
    posicion === 1 ? "🥈" :
    posicion === 2 ? "🥉" : `${posicion + 1}. `;

  console.log(`${medalla} ${sacramento}`);
}




const configuracionSistema = {
  idioma:        "es-EC",
  moneda:        "USD",
  zonaHoraria:   "America/Guayaquil",
  formatoFecha:  "DD/MM/YYYY",
  maxInscritos:  30,
  modoPublico:   true
};

console.log("=== Configuración actual del sistema ===");

for (const clave in configuracionSistema) {
  const valor = configuracionSistema[clave];

  const valorMostrado = typeof valor === "boolean"
    ? (valor ? "Activado" : "Desactivado")
    : valor;

  console.log(`  ${clave.padEnd(14)}: ${valorMostrado}`);
}




const listaCurso = [
  { nombre: "Diana",   sesiones: 6 },
  { nombre: "Carlos",  sesiones: 4 },
  { nombre: "Elida",     sesiones: 0 },  
  { nombre: "Hernán",    sesiones: 8 },
  { nombre: "Sofía",    sesiones: 0 },
];

const SESIONES_CRITICAS = 1;

for (const p of listaCurso) {
  if (p.sesiones < SESIONES_CRITICAS) {
    console.log(`⚠️ Primer participante sin asistencia: ${p.nombre} (sesiones: ${p.sesiones})`);
    break;
  }
}


const registros = [
  { id: "R001", nombre: "Diana",   estado: "aprobado"  },
  { id: "R002", nombre: "Carlos",  estado: "pendiente" },
  { id: "R003", nombre: "Elida",     estado: "aprobado"  },
  { id: "R004", nombre: "Hernán",    estado: "rechazado" },
  { id: "R005", nombre: "Sofía",    estado: "aprobado"  },
];

let totalAprobados = 0;

console.log("=== Procesando inscripciones aprobadas ===");

for (const r of registros) {
  if (r.estado !== "aprobado") {
    console.log(`  ↩️  ${r.id} omitido (${r.estado})`);
    continue;
  }

  totalAprobados++;
  console.log(`  ✅ ${r.id}: ${r.nombre}`);
}

console.log(`Total aprobados: ${totalAprobados}`);

