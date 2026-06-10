function mostrarAlerta(){
    alert('Hola desde boton!');
}

function agregarProducto() {
    const lista = document.getElementById('lista-productos1');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Producto';
    lista.appendChild(nuevoProducto);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-productos2');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Producto desde Evento Listener';
    lista2.appendChild(nuevoProducto);
});


function cambiarParrafo() {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "Texto modificado";
  console.log("Mensaje:", mensaje);
}


function cambiar() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Chao";
  console.log("Titulo:", titulo);
}


document.getElementById('campo')
  .addEventListener('input',()=>{
    console.log('Valor del campo:',
      document.getElementById('campo').value);
    
});


document.getElementById('campo')
  .addEventListener('input',()=>{
    const valorCampo = document
    .getElementById('campo_actualizar_parrafo').value;
    document.getElementById('parrafo')
    .textContent = 
    `Valor actualizado: ${valorCampo}` 
});
