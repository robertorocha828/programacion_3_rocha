document.addEventListener("DOMContentLoaded", function(){
  const titulo = document.getElementById("titulo");
  console.log("Titulo:", titulo);

  const notas = document.getElementsByClassName("nota");
  console.log("Notas:", notas);

  const sacramentos = document.getElementsByTagName("li");
  console.log("Sacramentos:", sacramentos);

  const primerSacramento = document.querySelector(".sacramento");
  console.log("Primer sacramento", primerSacramento);

  const todosLosSacramentos = document.querySelectorAll(".sacramento");
  console.log("Todos los sacramentos", todosLosSacramentos);

  Array.from(todosLosSacramentos).forEach(elemento => {
    console.log("Sacramento:", elemento);
  })
});
