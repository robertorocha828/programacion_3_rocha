const usuarioAutenticado = true;
const rolUsuario         = "catequista";
const seccion            = "configuracion";

if (usuarioAutenticado) {
  console.log(`Bienvenido. Rol: ${rolUsuario}`);

  if (rolUsuario === "admin") {
    console.log("Acceso completo concedido.");

    if (seccion === "configuracion") {
      console.log("Cargando panel de configuración del sistema...");
    }
  } else if (rolUsuario === "catequista") {
    console.log("Acceso de catequista concedido.");

    if (seccion === "configuracion") {
      console.log("⛔ Los catequistas no tienen acceso a la configuración del sistema.");
    } else {
      console.log(`Cargando sección: ${seccion}`);
    }
  } else {
    console.log("Rol desconocido. Contacta al administrador parroquial.");
  }

} else {
  console.log("Sesión no iniciada. Redirigiendo al login...");
}



const nombre   = "Roberto";
const email    = "roberto@parroquia.ec";
const cedula   = "1750135848";
const MIN_CED  = 10;

if (nombre.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombre}`);

  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    if (cedula.length < MIN_CED) {
      console.log(`❌ La cédula debe tener al menos ${MIN_CED} dígitos.`);
      console.log(`   Dígitos actuales: ${cedula.length}`);
    } else {
      console.log("✅ Cédula válida. Inscripción completada.");
    }
  }
}


const prompt = require("prompt-sync")();
const costo  = prompt("Ingrese el costo del curso: ");
const costoTotal = parseInt(costo);
const miembro    = prompt("¿Es miembro de la parroquia? (S/N): ");

if (costoTotal > 15) {
  if (miembro === "S") {
    console.log("Descuento especial (Curso > $15 y es miembro)");
  } else {
    console.log("Sin descuento (Curso > $15 pero no es miembro)");
  }
} else {
  console.log("No aplica descuento (Costo insuficiente)");
}
