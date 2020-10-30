// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const invertirCaso = (string) => {
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);

    string =
      char === char.toLowerCase()
        ? string.replace(char, char.toUpperCase())
        : string.replace(char, char.toLowerCase());
  }
  return string;
};

console.log(invertirCaso("jaVasCripT"));
