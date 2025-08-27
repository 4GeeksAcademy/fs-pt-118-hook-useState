import React, { useState } from "react";


const EjemploComponenteConEstados = ({info}) => {
console.log('+++++++++++++++++estado actualizado+++++++++++++++++++')
const [estadoDeAnimo, setEstadoDeAnimo] = useState('triste')
    
const handleMoodChange = () => {
    const estados = ['contento', 'melancolico', 'triste', 'avergonzado', 'angustiado', 'feliz']
    setEstadoDeAnimo(estados[Math.floor(Math.random()*estados.length)])
}

        return (

            <div className="container">
                <h3>Soy un componente con Estados y tambien muestro el estado de mi padre (Home)</h3>
                <p>el valor de age es {info}</p>
                <p>Ahora estoy {estadoDeAnimo}</p>

                    <button onClick={handleMoodChange}>cambiar estado de animo</button>
            </div>

        )

}


export default EjemploComponenteConEstados