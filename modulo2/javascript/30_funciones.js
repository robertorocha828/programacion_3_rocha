// funcion declarada
function saludo(){
    console.log("hellow world");
}
saludo();

// funcion expresada
const saludarHola = function(){
    console.log("Hola con funcion expresada");
}
saludarHola();


// Funcion Fecha
const saludosFlecha = ()=>{
    console.log("Hello con Funcion flecha");
}
saludosFlecha();


// Funcion Anonima
setTimeout(function(){
    console.log("Ejecutando...")
},1000)



// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  console.log(saludar("Ana"));   // "Hola, Ana!"
  console.log(saludar("Luis"));  // "Hola, Luis!"



  //parametros 
  function saludarConParametros(nombre){
    console.log("Hoal"+nombre)
  }
  saludarConParametros("Pedro")

  function sumar(a,b){
    return a+b;
  }
  resutaldo = sumar(45,5);
  console.log(resutaldo)