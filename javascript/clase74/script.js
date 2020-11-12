"use strict";

const objeto = {
  name: "Adrian",
  lastname: "Solimano",
  email: "adrian@ada.com",
  edad: 37,
  datosBancarios: {
    cbu: "123123123123123",
    numeroCuenta: "123123123",
    alias: "UNO.DOS.TRES",
  },
};

// const name = "Mi aplicación Web";
// Asignación por desestructuración
// const name = objeto.name;
// const lastname = objeto.lastname;
// const email = objeto.email;
// const { name, lastname, email } = objeto;

// Cambiando el nombre de variables desestructuradas

// const { name: name2, lastname, email } = objeto;

// console.log(name, name2);

// Desestructuración anidada

// const {
//   datosBancarios,
//   datosBancarios: { numeroCuenta },
// } = objeto;

// console.log(datosBancarios);

// Desestructurando parámetros

// const miFuncion = ({ name, datosBancarios }) => {
//   console.log(name, datosBancarios);
// };

// miFuncion(objeto);

// Objetos como parámetros

// Operador spread

// const { ...restoDelObjeto } = objeto;

// restoDelObjeto.otroDato = "Otro dato";
// restoDelObjeto.name = "J. Adrián";

// console.log(restoDelObjeto);
// console.log(objeto);
// Operador rest

// Inmutabilidad

// Object.freeze(objeto);

Object.seal(objeto);

objeto.name = "J. Adrián";
objeto.edad = 20;
objeto.otroDato = "Otro dato";

console.log(objeto);

// Pasaje por valor vs pasaje por referencia

// Shallow copy vs deep copy

let objeto2 /* J6 */ = objeto; /* J6 */

const { ...restoDelObjeto } /* P20 */ = objeto; /* J6 */
