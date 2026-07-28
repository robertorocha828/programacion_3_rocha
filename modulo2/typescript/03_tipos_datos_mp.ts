const nombre:    string = "Roberto Rocha";
const saludo:    string = `Hola, ${nombre}`;
const vacia:     string = "";
const comillas:  string = 'Cursos Sacramentos 2026';

console.log(nombre);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

console.log(nombre.toUpperCase());        
console.log(nombre.toLowerCase());        
console.log(nombre.includes("Pérez"));    
console.log(nombre.split(" "));           



const sesiones:     number = 6;
const costo:        number = 10.50;
const negativo:     number = -100;
const totalGlobal:  number = 5_000_000;  
const promedio:     number = 85 / 3;

console.log(sesiones);
console.log(costo);
console.log(totalGlobal);
console.log(promedio);                   
console.log(promedio.toFixed(2));        

console.log(10 + 3);   
console.log(10 - 3);   
console.log(10 * 3);   
console.log(10 / 3);  
console.log(10 % 3);   
console.log(2 ** 10);  


const aprobado:      boolean = true;
const tieneDocumentos: boolean = false;

console.log(aprobado);
console.log(!aprobado);                        
console.log(aprobado && tieneDocumentos);      
console.log(aprobado || tieneDocumentos);       


const sesionesAsistidas = 8;
const cumpleMinimo: boolean = sesionesAsistidas >= 6;
console.log(`¿Cumple el mínimo? ${cumpleMinimo}`); 


let dato: any = "Bautismo";
dato = 10;        
dato = true;      
dato = [1, 2, 3]; 


function procesarDato(valor: unknown): string {

  if (typeof valor === "string") {
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    return valor.toFixed(2);
  }

  if (typeof valor === "boolean") {
    return valor ? "Inscrito" : "No inscrito";
  }

  return "Tipo no reconocido";
}

console.log(procesarDato("bautismo"));  
console.log(procesarDato(10.5));        
console.log(procesarDato(true));        
console.log(procesarDato(null));        


function saludarParticipante(nombre: string): void {
  console.log(`Hola, ${nombre}! Bienvenido al curso de sacramentos.`);
}

saludarParticipante("Roberto");


function calcularCosto(sesiones: number): number {
  return sesiones * 5;
}

const resultado = calcularCosto(6);
console.log(resultado); // 30
