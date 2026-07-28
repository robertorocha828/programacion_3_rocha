const usuarioAutenticado = true;
const rolUsuario         = "editor";
const seccion            = "configuracion";

if (usuarioAutenticado) {
  console.log(`Bienvenido. Rol: ${rolUsuario}`);

  if (rolUsuario === "admin") {
    console.log("Acceso completo concedido.");

    if (seccion === "configuracion") {
      console.log("Cargando panel de configuración del sistema...");
    }
  } else if (rolUsuario === "editor") {
    console.log("Acceso de edición concedido.");

    if (seccion === "configuracion") {
      console.log("⛔ Editores no tienen acceso a configuración del sistema.");
    } else {
      console.log(`Cargando sección: ${seccion}`);
    }
  } else {
    console.log("Rol desconocido. Contacta al administrador.");
  }

} else {
  console.log("Sesión no iniciada. Redirigiendo al login...");
}
// Bienvenido. Rol: editor
// Acceso de edición concedido.
// ⛔ Editores no tienen acceso a configuración del sistema.


const nombre    = "Ana";
const email     = "ana@correo.com";
const password  = "abc";
const MIN_PASS  = 8;

if (nombre.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombre}`);

  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    if (password.length < MIN_PASS) {
      console.log(`❌ La contraseña debe tener al menos ${MIN_PASS} caracteres.`);
      console.log(`   Caracteres actuales: ${password.length}`);
    } else {
      console.log("✅ Contraseña válida. Registro completado.");
    }
  }
}
// ✅ Nombre válido: Ana
// ✅ Email válido: ana@correo.com
// ❌ La contraseña debe tener al menos 8 caracteres.
//    Caracteres actuales: 3

// ejercio en clase 
// pide el total de la compra y si el cliente es miembro:
// si es miembro descuento especial 
// si no no aplica el desceunto

const prompt = require("prompt-sync")();
const compra = prompt("Ingrese el total de la compra: ");
const compra_total = parseInt(compra);
const miembro = prompt("¿Es miembro? (S/N): ");

// Primer nivel: ¿La compra supera los 50?
if (compra_total > 50) {
    if (miembro == "S") {
        console.log("Descuento especial (Compra > 50 y es miembro)");
    } else {
        console.log("Descuento normal (Compra > 50 pero no es miembro)");
    }

} else {
    console.log("No aplica descuento (Compra insuficiente)");
}




