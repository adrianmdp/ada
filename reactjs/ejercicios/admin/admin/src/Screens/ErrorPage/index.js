import React, { useEffect, useState } from "react";

export const ErrorPage = () => {
  const [on, setOn] = useState(false);
  const [counter, setCounter] = useState(0);

  const procesoCostoso = () => {
    console.log("proceso costo");
  };

  useEffect(() => {
    procesoCostoso();
  }, [counter]);

  return (
    <div>
      <h1>Pagina de error</h1>

      <button onClick={() => setOn(!on)}>Cambiar estado</button>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>

      <br />

      {on ? "encendido" : "apagado"}

      <br />

      {counter}
    </div>
  );
};
