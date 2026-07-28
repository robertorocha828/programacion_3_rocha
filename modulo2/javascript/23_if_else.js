const horaActual = 16; // hora en formato 24h

if (horaActual < 12) {
  console.log("Buenos días. Turno de mañana activo.");
} else {
  console.log("Buenas tardes. Turno de tarde activo.");
}
// Buenas tardes. Turno de tarde activo.


//Ejemplo — aprobación de crédito:
const ingresoMensual = 800;
const deudaActual = 200;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4; // la deuda no debe superar el 40% del ingreso

const ratioDeuda = deudaActual / ingresoMensual;

if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
  console.log("Crédito aprobado.");
  console.log(`Ratio deuda/ingreso: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
  console.log("Crédito denegado.");
  console.log(`Ingreso mínimo requerido: $${INGRESO_MINIMO}`);
  console.log(`Ratio deuda actual: ${(ratioDeuda * 100).toFixed(1)}% (máximo permitido: 40%)`);
}
// Crédito aprobado.
// Ratio deuda/ingreso: 25.0%

//Ejemplo — verificación de contraseña:
const contrasenaIngresada = "Segura12";
const contrasenaCorrecta  = "Segura123";
let intentosFallidos      = 0;
const MAX_INTENTOS        = 3;

if (contrasenaIngresada === contrasenaCorrecta) {
  console.log("Autenticación exitosa. Bienvenido.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(`Contraseña incorrecta. Intentos restantes: ${intentosRestantes}`);
  console.log(`Ìntentos fallidos: ${intentosFallidos}`)
}
// Autenticación exitosa. Bienvenido.


//ejercio en clase
// pide la cantidad de productos comprados.
//si son 10 o mas, muestr : desceunto aplicado si no sin descuento
const prompt = require("prompt-sync")();
const cantidad_productos = prompt("Ingrese la cantidad de prodcutos : ");
if (cantidad_productos >= 10){
    console.log("Descuento aplicado")
}else{
    console.log("Sin descuento")
}

// Solicite una contraseña.
// si es igual a 123 acceso permitido si no acceso denegado
const contrasenaCorrecta1  = "123";
const prompt1 = require("prompt-sync")();
const contrasenaIngresada1 = prompt("Ingrese su contarseña: ");
if (contrasenaCorrecta === contrasenaIngresada){
    console.log("Acceso permitido")
}else{
    console.log("Acceso denegado")
}

//Ingrese la hora.
//Si es menor a 12 Buen dia si buenas tardes/noche
const prompt2 = require("prompt-sync")();
const hora = prompt("Ingrese la hora (formato 0-23): ");
if(hora < 12){
    console.log("Buenso dias")
}else{
    console.log("Buenas tardes/noche")
}
