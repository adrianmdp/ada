import React from "react";
import { Layout } from "./Layout";

const App = () => { 

  // Anotación o inferencias de Tipos
  
  // Tipos primitivos

    // Booleans

    let activo: boolean;
    let activo2 = true;
    let activo3;

    activo = false;
    activo2 = false;
    activo3 = "Cualquier valor";
    activo3 = 123;
    activo3 = false;


    // Numbers

    let edad: number;
    let edad2 = 123;

    edad = 321;
    // edad = "32"; <- error


    // Strings

    let name: string;
    let name2 = "Adrián";
    let name3;

    name = '4';
    name2 = "Mati";
    // name2 = 4;  <- Error
    name3 = "Sabri";

    name3 = 5;


    // Array
    let miArreglo: string[] = []
    let miArregloBidimensional: string[][] = [];

    miArreglo.push( "Adrián", "Mati", "Sabri" );

    miArregloBidimensional.push( ["Adrián"], ["Mati"], ["Sabri"] );


    // Null
    let var1: null;
    let var2 = null;

    // Undefined

  
  // Tuplas
  let miTupla: [number, string, boolean] = [3, "Adrián", false];
  
  // Enums
  enum estados {
    activo = "activo",
    inactivo = "inactivo"
  }

  let status = estados.activo

  console.log(status)

  
  // Tipo Object

  const user = {
    name: "Adrian",
    email: "asd@asd.com",
    edad: 123
  }

  const persona: { name: string, email: string, edad: number } = user

  
  // Funciones
  const suma = (valor1: number, valor2: number) => {

    return valor1 + valor2

  }

  suma(3, 2)

  // suma(1, "asz"); <- error
  
  // Interfaces
  interface Product {
    name?: string
    price?: number
    description?: string
  }

  let producto1: Product & Product2 = {};

  producto1.name = "Samsung Galaxy S10";
  producto1.price = 123;
  producto1.description = "Lorem Ipsum";


  interface Product2 {
    category?: string
  }

  producto1.category = "Teléfonos"
  
  // Types y Interfaces

  type Vehiculo = {
    patente: string,
    marca: string,
    modelo: string 
  }

  type Persona = {
    name: string, 
    email: string, 
    edad: number,
    vehiculos?: Vehiculo[]
  }

  let persona1: Persona;
  let persona2: Persona;

  let vehiculo1: Vehiculo = {
    patente: "as123",
    marca: "Peugeot",
    modelo: "407" 
  }
  let vehiculo2: Vehiculo = {
    patente: "as213",
    marca: "Peugeot",
    modelo: "307" 
  }

  persona1 = user;

  console.log(persona1.name);

  persona2 = { name: "Mati", edad: 213, email: "qwqw@qw.com", vehiculos: [vehiculo1, vehiculo2] }


  // Utility types
    // Partial
    // Required
    // Readonly
    // Pick
    // Omit
    // Exclude
    // Extract

  const fx = () => {
    console.log("Se presionó el botón")
  }

  return (
    <Layout title="Agrgar Usuarios" handleClick={fx} />
  );
};

export default App;
