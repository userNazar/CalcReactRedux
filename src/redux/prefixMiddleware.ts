import { bigSreen } from "./actions";
import { CHANGE_STYLE } from "./types";
import { CLEAR_ALL, CLEAR_LAST, CLOSE_ALERTS, SET_INPUT, SHOW_EQUAL } from "./types"

const cheker = ['+', '-', '*', '/', '%']


export default function prexMiddle(store: any) {
    return function (next: any) {
        return function (action: any) {
            const state = store.getState().logic.input;

            if ((state.length >= 20 && action.type !== CLEAR_ALL) && (action.type !== CLOSE_ALERTS) && (action.type !== CLEAR_LAST) && (action.type !== SET_INPUT) && (action.type !== CHANGE_STYLE)) {
                return next(bigSreen())
            }

            if (cheker.includes(action.payload) && !store.getState().logic.input) {
                return;
            }

            if ((!store.getState().logic.input || store.getState().logic.input === '0') && action.payload === '0') {
                return;
            }

            if (action.type === SHOW_EQUAL && (cheker.includes(action.payload[action.payload.length - 1]) || cheker.includes(action.payload[0]))) {
                return;
            }

            if (cheker.includes(store.getState().logic.input[store.getState().logic.input.length - 1]) && cheker.includes(action.payload)) {
                return;
            }



            if (action.payload === '.' && !store.getState().logic.input) {
                action.payload = '0.'
            }

            if (action.payload === '.' && cheker.includes(state[state.length - 1])) {
                action.payload = '0.'
            }
            
            

            return next(action)
        }
    }
}