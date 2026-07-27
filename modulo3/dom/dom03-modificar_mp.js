  document.addEventListener("DOMContentLoaded", function(){
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Curso de Bautismo asignado";
    console.log("Mensaje:", mensaje)

  const link = document.getElementById("link");
  link.textContent = "www.diocesisdequito.org";
  link.href = "https://www.diocesisdequito.org";
  link.classList.add("boton")
  console.log("Link:", link);

});
