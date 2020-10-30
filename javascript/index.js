// 4) Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido,
//es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const invertirCaso = (string) => {
  for (i = 0; i < string.length; i++) {
    let caracter = string.charAt(i);

    string =
      caracter === caracter.toLowerCase()
        ? string.replace(caracter, caracter.toUpperCase())
        : string.replace(caracter, caracter.toLowerCase());
  }

  return string;
};

// const invertirCaso = (string) => {
//   for (i = 0; i < string.length; i++) {
//     let caracter = string.charAt(i);
//     console.log("analizando caracter " + caracter + "...");
//     console.log(
//       "(caracter == string.charAt(i).toLowerCase) = " +
//         (caracter === string.charAt(i).toLowerCase)
//     );

//     if (caracter === caracter.toLowerCase()) {
//       console.log("caracter " + caracter + " es lowercase");
//       nuevoCaracter = caracter.toUpperCase();
//       string = string.replace(string.charAt(i), nuevoCaracter);
//     } else if (caracter === caracter.toUpperCase()) {
//       console.log("caracter " + caracter + " es uppercase");
//       nuevoCaracter = caracter.toLowerCase();
//       string = string.replace(string.charAt(i), nuevoCaracter);
//     }
//   }
//   return string;
// };

console.log(invertirCaso("AdriAn"));
