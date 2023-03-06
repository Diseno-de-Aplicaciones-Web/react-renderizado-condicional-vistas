import { useEffect, useState } from "react";

function ProbaBucle() {
    
    const [ numeroDeElementos, setNumeroDeElementos ] = useState()
    const [ elementosHTML, setElementosHTML ] = useState([])

    useEffect(
        ()=>{
            const novosElementos = []
            let contador = 0
            while (contador < numeroDeElementos) {
                novosElementos.push(<p>Un parrafo</p>)
                contador++
            }
            setElementosHTML(novosElementos)
        },
        [numeroDeElementos]
    )

    function manexadorInput(evento) {
        const nuevoValor = evento.target.value
        const valorComoNumero = parseInt(nuevoValor)
        setNumeroDeElementos(valorComoNumero)
    }

    return(
        <>

            <input value={numeroDeElementos} onInput={manexadorInput}/>
            <p>{numeroDeElementos}</p>

            {elementosHTML}

        </>
    )

}

export default ProbaBucle