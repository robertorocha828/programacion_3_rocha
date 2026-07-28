index = 0;
while (index <= 5) {
  console.log(index);
  index++;
}

index = 10;
while (index <= 1) {
  console.log(index);
  index--;
}



const participantesPendientes = [
  { id: "P001", prioridad: "alta",   nombre: "María Pérez",    sacramento: "Bautismo"      },
  { id: "P002", prioridad: "media",  nombre: "Carlos Ortega",  sacramento: "Confirmación"  },
  { id: "P003", prioridad: "baja",   nombre: "Ana Torres",     sacramento: "Comunión"      },
  { id: "P004", prioridad: "alta",   nombre: "Luis Mora",      sacramento: "Matrimonio"    },
];

let indice = 0;

console.log("=== Procesando lista de participantes ===");

while (indice < participantesPendientes.length) {
  const p = participantesPendientes[indice];

  if (p.prioridad === "alta") {
    console.log(`🔴 [URGENTE] ${p.id}: ${p.nombre} — ${p.sacramento}`);
  } else if (p.prioridad === "media") {
    console.log(`🟡 [NORMAL]  ${p.id}: ${p.nombre} — ${p.sacramento}`);
  } else {
    console.log(`🟢 [BAJO]    ${p.id}: ${p.nombre} — ${p.sacramento}`);
  }

  indice++;
}

console.log(`Total procesados: ${participantesPendientes.length} participantes`);



const CUPO_MAXIMO    = 20;
const inscritosDiarios = [3, 5, 4, 6, 2, 4];
let totalInscritos     = 0;
let diasTranscurridos  = 0;

while (totalInscritos < CUPO_MAXIMO && diasTranscurridos < inscritosDiarios.length) {
  const inscritosDelDia  = inscritosDiarios[diasTranscurridos];
  totalInscritos        += inscritosDelDia;
  diasTranscurridos++;

  console.log(`Día ${diasTranscurridos}: +${inscritosDelDia} inscritos → Total: ${totalInscritos}`);

  if (totalInscritos >= CUPO_MAXIMO) {
    console.log(`🎯 ¡Cupo completo en ${diasTranscurridos} día(s)!`);
  }
}

if (totalInscritos < CUPO_MAXIMO) {
  const faltantes = CUPO_MAXIMO - totalInscritos;
  console.log(`Cupo no completado. Faltan ${faltantes} inscritos.`);
}


const MAX_REINTENTOS   = 3;
const TIMEOUT_SEGUNDOS = 2;
let reintentos         = 0;
let conexionExitosa    = false;

do {
  reintentos++;
  console.log(`Intento ${reintentos}/${MAX_REINTENTOS}: conectando al sistema...`);


  if (reintentos >= 3) {
    conexionExitosa = true;
  }

  if (!conexionExitosa && reintentos < MAX_REINTENTOS) {
    console.log(`  ⏳ Fallo. Reintentando en ${TIMEOUT_SEGUNDOS}s...`);
  }

} while (!conexionExitosa && reintentos < MAX_REINTENTOS);

if (conexionExitosa) {
  console.log("✅ Conexión establecida correctamente.");
} else {
  console.log("❌ No se pudo conectar. Verifique el servidor.");
}
