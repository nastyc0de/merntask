import React from 'react'

const NuevaTarea = () => {
    const handleClick = e => {
        e.preventDefault()
    }
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <button
                        className="btn btn-primario btn-submit btn-block"
                        onClick={handleClick}
                    >Agregar Tarea</button>
                </div>
            </form>
        </div>
    )
}

export default NuevaTarea
