const texto   = "10";
const numero  = Number(texto);          
const entero  = parseInt("2.5", 10);  
const decimal = parseFloat("10.50");   
const cadena  = String(2);            
const bool    = Boolean(0);           

console.log(numero);   
console.log(entero);  
console.log(decimal);  
console.log(cadena);   
console.log(bool);     

console.log("5" + 3);    
console.log("5" - 3);    
console.log("5" * "2");  
console.log(true + 1);  
console.log(false + 1);  


console.log(Number("Curso de Control de Sacramentos de la Iglesia Católica"));       
console.log(Number(""));          
console.log(Number(null));        
console.log(Number(undefined));   


console.log(isNaN(Number("Curso de Control de Sacramentos de la Iglesia Católica")));  
console.log(isNaN(10));            
