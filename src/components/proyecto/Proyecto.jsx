import React from 'react'

const Proyecto = ({proyecto}) => {
    
    const {nombre} = proyecto;
    return (
        <li>
            <button
                className="btn btn-blank"
            >
                {nombre}
            </button>
        </li>
    )
}

export default Proyecto
