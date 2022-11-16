/* useReducer: se usa para mantener estados más complejos */

import { useReducer } from "react";

const initialState = {
    contador: 0,
};

type ActionType = { type: "incrementar" } | { type: "decrementar" } | {type: "custom", payload: number}

const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case "incrementar":
            /* El state en un reducer nunca debe ser muteable, es decir: return state.contador + 1 
                Siempre se debe retornar un nuevo state, y eso se hace utilizando el spread operator en state, lo cual extrae y esparce todas las propiedades del state, creando una nueva variable (copia), ocupando otro lugar en la memoria y rompiendo la referencia*/
            return {
                ...state,
                contador: state.contador + 1,
            };

        case "decrementar":
            return {
                ...state,
                contador: state.contador - 1,
            };

            case "custom":
                return {
                    ...state,
                    contador: state.contador + action.payload
                }

        default:
            /* En caso que se haga una acción que no está contemplada, se retorna por default el state */
            return state;
    }
};

export const ContadorReducer = () => {
    const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

    return (
        <>
            <h2>Contador: {contadorState.contador}</h2>
            <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "incrementar" })}>
                +1
            </button>
            <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "decrementar" })}>
                -1
            </button>
            <button className="btn btn-outline-danger" onClick={() => dispatch({ type: "custom", payload: 100 })}>
                100
            </button>
        </>
    );
};
