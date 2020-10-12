import { types } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case types.ABRIR_FORMULARIO_PROYECTO:
            return{
                ...state,
                nuevoProyecto: true
            }
        default:
            return state;
    }
}