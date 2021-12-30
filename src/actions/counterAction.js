import { counter } from "../types/types"

export const incrementarContador = () => async(dispatch) => {
    dispatch({
        type: counter.INCREMENTAR
    })
}

export const decrementarContador = () => async(dispatch) => {
    dispatch({
        type: counter.DECREMENTAR
    })
}