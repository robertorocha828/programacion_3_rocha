const participante = {
  nombre:    "Diana Rocha",    
  edad:      28,               
  inscrito:  true              
};

console.log(participante.nombre);   
console.log(participante.edad);     

console.log(participante["nombre"]);         
const clave = "edad";
console.log(participante[clave]);            

console.log(participante.parroquia);         

participante.parroquia = "San Francisco";
console.log(participante.parroquia);         

delete participante.inscrito;
console.log(participante.inscrito);          


participante.nombre = "Diana Delgado";
console.log(participante);


const cursoSacramentos = {
  calcularTotal: function(costo, participantes) {
    return costo * participantes;
  },

  calcularDescuento(subtotal) {
    return subtotal * 0.10;
  },

  aplicarIva: (subtotal) => subtotal * 1.12
};

console.log(cursoSacramentos.calcularTotal(20, 5));       
console.log(cursoSacramentos.calcularDescuento(100));     
console.log(cursoSacramentos.aplicarIva(100));            



const participante2 = {
  nombre:    "Carlos Rocha",
  sacramento: "Confirmación",


  presentar() {
    return `Hola, soy ${this.nombre} y me inscribo en ${this.sacramento}.`;
  },

  confirmar() {
    this.inscrito = true; 
    return `¡Inscripción confirmada, ${this.nombre}! Sacramento: ${this.sacramento}.`;
  },

  presentarArrow: () => {
    return `Hola, soy ${this.nombre}`; 
  }
};

console.log(participante2.presentar());     
console.log(participante2.confirmar());      
console.log(participante2.presentarArrow()); 


const nombre    = "Carlos Rohca";
const sacramento = "Bautismo";
const parroquia  = "El Belén";


const participante3 = {
  nombre:     nombre,
  sacramento: sacramento,
  parroquia:  parroquia
};


const participante4 = { nombre, sacramento, parroquia };

console.log(participante4);

