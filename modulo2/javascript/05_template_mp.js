const nombre    = "María";
const apellido  = "Pérez";
const sacramento = "Primera Confirmación";


console.log(`Hola, ${nombre}`);


console.log(`Participante: ${nombre.toUpperCase()} ${apellido.toUpperCase()}`);
console.log(`El próximo año cumplirá ${15 + 1} años`);
console.log(`¿Completó el curso? ${true ? "Sí" : "No"}`);


const ficha = `
  Nombre:    ${nombre} ${apellido}
  Sacramento: ${sacramento}
  Estado:    ${true ? "Inscrito" : "No inscrito"}
`;

console.log(ficha);
