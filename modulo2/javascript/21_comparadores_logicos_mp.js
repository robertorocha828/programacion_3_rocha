false
0
""          // string vacío
null
undefined
NaN


"false"     // truthy — string no vacío (aunque diga "false")
"0"         // truthy — string no vacío
//[]          // truthy — array vacío
{}          // truthy — objeto vacío
-1          // truthy — número distinto de 0

console.log(Boolean(0));        
console.log(Boolean(""));       
console.log(Boolean("false"));  
console.log(Boolean([]));       


console.log(true && true);    
console.log(true && false);   
console.log(false && true);   
console.log(false && false);  

console.log(1 && 2);          
console.log(0 && 2);          
console.log("" && "hola");    
console.log("a" && "b");      


const participante = { nombre: "Roberto", admin: true };

participante.admin && console.log("Bienvenido, administradora del sistema");


const parroquia = participante.direccion && participante.direccion.parroquia;

console.log(parroquia)


console.log(true || false);   
console.log(false || true);   
console.log(false || false);  


console.log(1 || 2);          
console.log(0 || 2);          
console.log(0 || "");         
console.log("" || "default"); 

const prompt = require("prompt-sync")();
const nombre = prompt("Tu nombre:") || "Invitado";


function saludar(nombre) {
  const n = nombre || "Participante";
  console.log(`Hola, ${n}`);
}

saludar("Roberto");   
saludar("");        
saludar(null);      


console.log(!true);     
console.log(!false);    
console.log(!0);        
console.log(!1);        
console.log(!"");       
console.log(!"hola");   
console.log(!null);     
console.log(!undefined);


console.log(!!0);       
console.log(!!1);       
console.log(!!"");      
console.log(!!"hola");  
console.log(!!null);    
console.log(!![]);      
