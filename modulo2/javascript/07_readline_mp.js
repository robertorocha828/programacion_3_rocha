const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escribe tu nombre para inscribirte: ", (nombre) => {
  console.log(`Hola, ${nombre}! Bienvenido al curso de Sacramentos.`);
  rl.close();
});
