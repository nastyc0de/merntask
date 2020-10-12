import React from 'react'
import Proyecto from './Proyecto'

const Listado = () => {
    const proyectos = [
        {nombre:'Tienda'},
        {nombre:'Internet'},
        {nombre:'BdD'}
    ]
    return (
        <ul className="listado-proyectos">
            {
                proyectos.map(proyecto=>(
                    <Proyecto
                        proyecto={proyecto}
                    />
                ))
            }
        </ul>
    )
}

export default Listado
