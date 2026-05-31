// JavaScript — acepta cualquier cosa sin avisar
function calcularCostoSinTipos(sesiones:number, costoPorSesion:number) {
  return sesiones * costoPorSesion;
}

console.log(calcularCostoSinTipos(6, 5));       
console.log(calcularCostoSinTipos(6, 5));     
console.log(calcularCostoSinTipos(6,8));          

function calcularCosto(sesiones: number, costoPorSesion: number): number {
  return sesiones * costoPorSesion;
}

console.log(calcularCosto(6, 5));     


function calcularTotal(costo: number, participantes: number): number {
  return costo * participantes;
}


function saludarParticipante(nombre: string): string {
  return `Hola, ${nombre}! Bienvenido al curso de sacramentos.`;
}


function cumpleMinimo(sesiones: number): boolean {
  return sesiones >= 6;
}


function mostrar(mensaje: string): void {
  console.log(`[INFO] ${mensaje}`);
}

console.log(calcularTotal(10, 5));              
console.log(saludarParticipante("Diana"));      
console.log(cumpleMinimo(8));                   
console.log(cumpleMinimo(3));                   
mostrar("Inscripción completada");              



function registrarParticipante(nombre: string, sacramento?: string, parroquia?: string): string {
  let resultado = `Participante: ${nombre}`;

  if (sacramento !== undefined) {
    resultado += ` — Sacramento: ${sacramento}`;
  }

  if (parroquia !== undefined) {
    resultado += ` — Parroquia: ${parroquia}`;
  }

  resultado += ".";
  return resultado;
}

console.log(registrarParticipante("Diana"));
console.log(registrarParticipante("Diana", "Bautismo"));
console.log(registrarParticipante("Diana", "Bautismo", "San Francisco"));


function buscarParticipante(
  participantes: string[],
  busqueda: string,
  exacto?: boolean
): string | null {
  for (const participante of participantes) {
    if (exacto) {
      if (participante === busqueda) return participante;
    } else {
      if (participante.toLowerCase().includes(busqueda.toLowerCase())) {
        return participante;
      }
    }
  }
  return null;  
}

const inscritos = ["Diana Delgado", "Roberto Rocha", "Ana Torres", "Ivan Ayala"];

console.log(buscarParticipante(inscritos, "diana"));              
console.log(buscarParticipante(inscritos, "diana", true));        
console.log(buscarParticipante(inscritos, "Ana Torres", true));   
console.log(buscarParticipante(inscritos, "Sofia"));               



function calcularArancel(
  costo: number,
  descuento: number = 10,
  aplicarIVA: boolean = true
): number {
  let costoFinal = costo * (1 - descuento / 100);

  if (aplicarIVA) {
    costoFinal *= 1.12;
  }

  return costoFinal;
}

const costo = 20;
console.log(calcularArancel(costo));               
console.log(calcularArancel(costo, 20));           
console.log(calcularArancel(costo, 20, false));    


function repetirAviso(mensaje: string, veces: number = 3): void {
  for (let i = 1; i <= veces; i++) {
    console.log(`[${i}/${veces}] ${mensaje}`);
  }
}

repetirAviso("Recuerda traer tus documentos al curso");     
repetirAviso("Última llamada: inscripción cierra hoy", 5); 



function calcularEstadisticas(...sesiones: number[]): {
  min:   number;
  max:   number;
  suma:  number;
  media: number;
} {
  if (sesiones.length === 0) {
    return { min: 0, max: 0, suma: 0, media: 0 };
  }

  let min  = sesiones[0]!;
  let max  = sesiones[0]!;
  let suma = 0;

  for (const s of sesiones) {
    if (s < min) min = s;
    if (s > max) max = s;
    suma += s;
  }

  return {
    min,
    max,
    suma,
    media: suma / sesiones.length
  };
}

const stats = calcularEstadisticas(8, 3, 10, 6, 9, 1, 7);
console.log(`Mínimo: ${stats.min}`);
console.log(`Máximo: ${stats.max}`);
console.log(`Suma:   ${stats.suma}`);
console.log(`Media:  ${stats.media.toFixed(2)}`);

function soloAprobados(...sesiones: number[]): number[] {
  const resultado: number[] = [];
  for (const s of sesiones) {
    if (s >= 6) resultado.push(s);
  }
  return resultado;
}

console.log(soloAprobados(8, 3, 10, 4, 6, 1, 9)); 