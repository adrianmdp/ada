// Crear una función dropWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos a partir del primer callback que devolvió false

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

const numeros = [40, 33, 50, 8, 2, 3, 20]
const multiploDe10 = (x) => x % 10 === 0
dropWhile(numeros, multiploDe10) // [8, 2, 3, 20]