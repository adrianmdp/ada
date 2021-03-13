import { useState } from "react"


const useMyHook = () => {

    const [state1, setState1] = useState('estado inicial')

    const operacion1 = () => {

        console.log('Operación 1')

    }

    const operacion2 = () => {

        console.log('Operación 2')

        operacion1()

    }

    const mostrarState = () => {

        console.log(state1)

    }

    const cambiarValorState = (nvoValor) => {

        setState1(nvoValor)

    }

    const printContent = () => {

        return(
            <div>
                esto es jsx - { state1 }
            </div>
        )

    }

    return { state1, mostrarState, operacion2, cambiarValorState, printContent }

}

export { useMyHook }