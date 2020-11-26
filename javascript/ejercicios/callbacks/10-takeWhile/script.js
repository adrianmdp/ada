// Crear una función takeWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos hasta el primer callback que devolvió false

// (Inverso del dropWhile)
const numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = (x) => x % 10 === 0
takeWhile(numeros, multiploDe10) // [40, 50]