import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {

    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext );
    const {nuevoProyecto, mostrarFormulario} = proyectosContext;

    const [proyecto, setProyecto] = useState({
        titulo:''
    });

    const {titulo} = proyecto;

    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmitProyect = e => {
        e.preventDefault()

    }
    const handleNuevoProyecto = () => {
        mostrarFormulario()
    }
    return (
        <>
            <button
                className='btn btn-block btn-primario'
                onClick={handleNuevoProyecto}
            >Nuevo Proyecto</button>
            {
                nuevoProyecto
                ?
                    (
                        <form 
                            className="formulario-nuevo-proyecto"
                            onSubmit={handleSubmitProyect}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto..."
                                name="titulo"
                                onChange={handleChange}
                                value={titulo}
                            />
                            <button  
                                className="btn btn-primario btn-block"
                            >Agregar Proyecto</button>
                        </form>
                    )
                : <p>Usted no tiene proyectos</p>
            }
        </>
    )
}

export default NuevoProyecto
