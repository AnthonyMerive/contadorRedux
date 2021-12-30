import { counter } from "../types/types";

const INITIAL_STATE = {

    count: 0,
}

export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case counter.INCREMENTAR: {
            return {
                ...state,
                count: state.count + 10
            }
        }

        case counter.DECREMENTAR: {
            return {
                ...state,
                count: state.count - 10
            }
        }

        default:
            return state;
    }
}