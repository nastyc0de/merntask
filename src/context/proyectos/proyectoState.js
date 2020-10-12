import React, { useReducer } from 'react';
import { types } from '../../types';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const initialState = {
        nuevoProyecto: false
    }
    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)
    // funciones
    const mostrarFormulario = () => {
        dispatch({
            type:types.ABRIR_FORMULARIO_PROYECTO
        })
    }
    return (
        <proyectoContext.Provider
            value={{
                nuevoProyecto:state.nuevoProyecto,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
