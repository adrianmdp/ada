import React from "react";
import { Layout } from "components";
import { Main } from "components";
import { useMyHook } from "hooks";

const Add = () => {
  const { state1, printContent, cambiarValorState } = useMyHook();

  const fx = (callback) => {
    callback();
  };

  fx(() => console.log("hola"));

  return (
    <Layout>
      <Main title="Agregar usuario" hideAddButton />

      <button onClick={() => cambiarValorState("nuevo estado")}>
        Cambiar estado
      </button>

      {printContent()}
    </Layout>
  );
};

export { Add };
