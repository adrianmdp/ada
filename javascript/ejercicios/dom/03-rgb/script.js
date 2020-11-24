// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

let colors = {};

for (let i = 0; i < 3; i++) {
  colors[i] = prompt(`Ingresar el valor ${i + 1}`);
}

document.body.style = `background-color: rgb(${colors[0]},${colors[1]},${colors[2]})`;
