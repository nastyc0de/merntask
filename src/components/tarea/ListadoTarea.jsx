import React from 'react'
import Tarea from './Tarea'

const ListadoTarea = () => {
    
    const tareas = [
        {nombre:'eligir tarea 1', estado: false},
        {nombre:'eligir tarea 2', estado: true},
        {nombre:'eligir tarea 3', estado: false},
        {nombre:'eligir tarea 4', estado: true}
    ]
    return (
        <>
            <h2>Proyecto: Tienda</h2>   
            <ul className="listado-tareas">
                {tareas.length === 0
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    :tareas.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
            >
                Eliminar Proyecto &times;
            </button>
        </>
    )
}

export default ListadoTarea
