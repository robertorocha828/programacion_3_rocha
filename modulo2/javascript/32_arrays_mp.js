const sacramentos  = ["Bautismo", "Comunión", "Confirmación"];
const sesiones     = [2, 12, 24, 6, 3];
const mixto        = [1, "Bautismo", true, null];  
const vacio        = [];

+console.log(sacramentos[0]);  
console.log(sacramentos[2]);  
console.log(sacramentos[9]);  

console.log(sacramentos[-1]);

console.log(sacramentos.at(-1));  
console.log(sacramentos.at(-2)); 

console.log(sacramentos.length);  

sacramentos[1] = "Primera Comunión";
console.log(sacramentos);


const inscritos = [1, 2, 3];

inscritos.push(4);
inscritos.push(5, 6);
console.log(inscritos);

const ultimo = inscritos.pop();
console.log(ultimo);    
console.log(inscritos); 

inscritos.unshift(0);
console.log(inscritos);

const primero = inscritos.shift();
console.log(primero);   
console.log(inscritos); 

const meses = ["ene", "feb", "abr", "may"];
meses.splice(2, 0, "mar");          
console.log(meses);                 

const eliminados = meses.splice(1, 2);  
console.log(eliminados);             
console.log(meses);                  


const sesiones2 = [10, 20, 30, 20, 40];

console.log(sesiones2.indexOf(20));     
console.log(sesiones2.indexOf(99));     

console.log(sesiones2.lastIndexOf(20));  

console.log(sesiones2.includes(30));     
console.log(sesiones2.includes(99));     


const participantes = ["Diana", "Carlos", "Sofia"];

participantes.forEach((participante, indice) => {
  console.log(`${indice}: ${participante}`);
});


for (const p of participantes) {
  console.log(p);
}


const costos = [10, 15, 20, 30];

const costosConDescuento = costos.map(c => c * 0.90);
console.log(costosConDescuento); 
console.log(costos);             

const registros = [
  { nombre: "Diana",   sacramento: "Bautismo"    },
  { nombre: "Carlos",  sacramento: "Confirmación"},
  { nombre: "Sofia",     sacramento: "Matrimonio"  }
];

const nombres = registros.map(r => r.nombre);
console.log(nombres); 


const resumen = registros.map(r => ({
  nombre:    r.nombre,
  aprobado: r.sacramento !== ""
}));
console.log(resumen);


const sesionesFilter = [2, 6, 10, 4, 8, 1, 9, 3];

const aprobados = sesionesFilter.filter(s => s >= 6);
console.log(aprobados); // [6, 10, 8, 9]

const participantesFilter = [
  { nombre: "Diana",   edad: 28, activo: true  },
  { nombre: "Carlos",  edad: 16, activo: true  },
  { nombre: "Sofia",     edad: 31, activo: false },
  { nombre: "Hernan",    edad: 22, activo: true  }
];

const adultosActivos = participantesFilter.filter(p => p.edad >= 18 && p.activo);
console.log(adultosActivos.map(p => p.nombre)); 

const costos2 = [10, 15, 20, 30];

const totalCostos = costos2.reduce((acum, c) => acum + c, 0);
console.log(totalCostos); // 75

const maximo = costos2.reduce((max, c) => c > max ? c : max, -Infinity);
console.log(maximo); // 30

const inscripciones = ["Bautismo", "Comunión", "Bautismo", "Confirmación", "Comunión", "Bautismo"];
const conteo = inscripciones.reduce((acum, sacramento) => {
  acum[sacramento] = (acum[sacramento] ?? 0) + 1;
  return acum;
}, {});
console.log(conteo);



const porcentajes = [95, 45, 80, 72, 100, 55, 88, 65];

const porcentajesValidos = porcentajes.filter(p => p >= 70 && p <= 100);
console.log(porcentajesValidos);
const enLetraA = porcentajesValidos.map(p => p >= 90 ? "A" : "B");
console.log(enLetraA);
