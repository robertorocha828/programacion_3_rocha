document.addEventListener("DOMContentLoaded", function(){
  const titulo = document.getElementById("titulo");
  console.log("Titulo:", titulo);

  const notas = document.getElementsByClassName("nota");
  console.log("Notas:", notas);

  const items = document.getElementsByTagName("li");
  console.log("Items", items);

  const primerItem = document.querySelector(".item");
  console.log("Primer item", primerItem);

  const todosLosItem = document.querySelectorAll(".item");
  console.log("Todos los items", todosLosItem);

  Array.from(todosLosItem).forEach(element => {
    console.log("Item:", element);
  })
}); 