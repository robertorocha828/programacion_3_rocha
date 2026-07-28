function bienvenida(){
    console.log("Bienvenido al Sistema de Control de Cursos de Sacramentos");
}
bienvenida();


const inscribir = function(){
    console.log("Participante inscrito con función expresada");
}
inscribir();


const verificarAsistencia = () => {
    console.log("Verificando asistencia con función flecha");
}
verificarAsistencia();


setTimeout(function(){
    console.log("Recordatorio: sesión de catequesis en 1 hora")
}, 1000)




function saludarParticipante(nombre) {
    return `Hola, ${nombre}! Bienvenido al Curso de Control de Sacramentos.`;
}

console.log(saludarParticipante("Diana"));  
console.log(saludarParticipante("Carlos")); 




function mostrarParticipante(nombre){
    console.log("Participante: " + nombre)
}
mostrarParticipante("Elida Delgado")

function calcularCosto(sesiones, costoPorSesion){
    return sesiones * costoPorSesion;
}
resultado = calcularCosto(6, 5);
console.log(resultado)



const calcularTotal = (costo, participantes) => {
    return costo * participantes;
};


const calcularTotalCorto = (costo, participantes) => costo * participantes;

const aplicarDescuento = costo => costo * 0.90;

const nombreSistema = () => "Sistema de Control De Sacramentos ";

console.log(calcularTotal(10, 5));          
console.log(calcularTotalCorto(10, 5));     
console.log(aplicarDescuento(20));          
console.log(nombreSistema());               


const cumpleMinimo = sesiones => sesiones >= 6;
console.log(cumpleMinimo(8));   
console.log(cumpleMinimo(3));   


function saludarParticipante2(nombre = "Participante", sacramento = "Bautismo") {
    return `Hola, ${nombre}! Tu sacramento es: ${sacramento}.`;
}

console.log(saludarParticipante2());                              
console.log(saludarParticipante2("Diana"));                       
console.log(saludarParticipante2("Diana", "Confirmación"));       

const calcularPotenciaDescuento = (base, exponente = 2) => base ** exponente;

console.log(calcularPotenciaDescuento(3));    
console.log(calcularPotenciaDescuento(3, 3)); 


const calcularArancel = (sesiones = 6, costoPorSesion = 5) => sesiones * costoPorSesion / 2;
console.log(calcularArancel(4, 3));



function totalSesiones(...sesiones) {
    let total = 0;
    for (const s of sesiones) {
        total += s;
    }
    return total;
}

console.log(totalSesiones(2, 6, 10));          
console.log(totalSesiones(2, 6, 10, 3, 5));   
console.log(totalSesiones());                 


function registrarEvento(sacramento, ...participantes) {
    for (const p of participantes) {
        console.log(`[${sacramento}] ${p}`);
    }
}

registrarEvento("Bautismo", "Diana Delgado", "Carlos Rocha", "Elida Delgado");





function datos_participante(sacramento, ...datos) {
    for (const d of datos) {
        console.log(`[${sacramento}] ${d}`);
    }
}

datos_participante("Confirmación", "Nombre: María Pérez", "Ciudad: Quito", "Teléfono: 0999999999");



const sesionesParticipantes = [8, 2, 6, 1, 9, 4];


console.log(Math.max(sesionesParticipantes));    

console.log(Math.max(...sesionesParticipantes)); 
console.log(Math.min(...sesionesParticipantes)); 

// Combinar arrays
const cursosManana = ["Bautismo", "Comunión"];
const cursosTarde  = ["Confirmación", "Matrimonio"];
const todosCursos  = [...cursosManana, ...cursosTarde];
console.log(todosCursos); 

const listaOriginal = ["Diana", "Carlos", "Elida"];
const listaCopia    = [...listaOriginal];
listaCopia.push("Hernan");
console.log(listaOriginal); 
console.log(listaCopia);    

const base     = { nombre: "Diana", sacramento: "Bautismo" };
const ampliado = { ...base, parroquia: "San Francisco" };
console.log(ampliado); 



function sinReturn() {
    const x = 42;
    
}
console.log(sinReturn()); 

function aprobo(sesiones) {
    if (sesiones >= 6) {
        return true;   
    }
    return false;      
}

const aproboCorto = sesiones => sesiones >= 6;

console.log(aprobo(8));        
console.log(aproboCorto(3));   


function operar(a, b, operacion) {
    return operacion(a, b);
}

const sumar       = (a, b) => a + b;
const restar      = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(operar(10, 3, sumar));        
console.log(operar(10, 3, restar));       
console.log(operar(10, 3, multiplicar));  

console.log(operar(10, 3, (a, b) => a ** b)); 



const global = "sistema de sacramentos"; 

function ejemploScope() {
    const local = "datos del participante"; 
    console.log(global); 
    console.log(local);  
}

ejemploScope();

{
    const dentroDeBloque = "Inscribete aquí";
    console.log(dentroDeBloque); // ✅
}

{
    var escapó = "Curso iniciado";
}
console.log(escapó);