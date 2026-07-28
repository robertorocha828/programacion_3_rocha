function mostrarAlerta(){
    alert('Hola desde el sistema de sacramentos!');
}

function agregarInscrito() {
    const lista = document.getElementById('lista-inscritos1');
    const nuevoInscrito = document.createElement('li');
    nuevoInscrito.textContent = 'Nuevo Inscrito - Bautismo';
    lista.appendChild(nuevoInscrito);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-inscritos2');
    const nuevoInscrito = document.createElement('li');
    nuevoInscrito.textContent = 'Nuevo Inscrito desde Evento Listener';
    lista2.appendChild(nuevoInscrito);
});


function cambiarParrafo() {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "Curso de Confirmación asignado";
  console.log("Mensaje:", mensaje);
}


function cambiar() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Comunión";
  console.log("Titulo:", titulo);
}


document.getElementById('campo')
  .addEventListener('input',()=>{
    console.log('Sacramento ingresado:',
      document.getElementById('campo').value);

});


document.getElementById('campo')
  .addEventListener('input',()=>{
    const valorCampo = document
    .getElementById('campo_actualizar_parrafo').value;
    document.getElementById('parrafo')
    .textContent =
    `Inscrito actualizado: ${valorCampo}`
});
