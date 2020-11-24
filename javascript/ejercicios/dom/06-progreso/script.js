// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

const progreso = () => {
  const progreso = prompt("Ingresar el progreso");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");

  div1.style.backgroundColor = "#EEE";
  div2.style.backgroundColor = "#DDD";
  div2.style.height = "20px";

  setInterval(() => {
    for (let i = 0; i < progreso; i++) {
      console.log(i);
    }
  }, 1000);
};

progreso();
