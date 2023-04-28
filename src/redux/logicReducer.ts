import { CHANGE_INPUT, SHOW_EQUAL, SET_INPUT, CLEAR_ALL, CLEAR_LAST } from "./types";

const initialState = {
    input: '',
    result: '',
}


export default function logicReducer(state: any = initialState, action: any) {
    switch (action.type) {

        case CHANGE_INPUT:
            return {
                ...state,
                input: state.input + action.payload,
            }
        case SHOW_EQUAL:
            return {
                ...state,
                // eslint-disable-next-line
                result: eval(action.payload)
            }

        case SET_INPUT:
            return {
                ...state,
                input: state.result.toString()
            }

        case CLEAR_ALL:
            return {
                ...state,
                input: '',
                result: '',
            }

        case CLEAR_LAST:
            return {
                ...state,
                input: state.input.slice(0, -1)
            }

        default: return state;
    }
}