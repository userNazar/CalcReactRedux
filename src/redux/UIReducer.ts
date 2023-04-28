import { BIG_SCREEN, CLOSE_ALERTS, MODAL_SCREEN } from "./types"

const initialState = {
    modal: false,
    bigScreen: false
}


export default function UIReducer(state: any = initialState, action: any) {
    switch (action.type) {


        case BIG_SCREEN:
            return {
                ...state,
                bigScreen: true
            }

        case MODAL_SCREEN:
            return {
                ...state,
                modal: true
            }

        case CLOSE_ALERTS:
            return {
                ...state,
                modal: false,
                bigScreen: false
            }

        default: return state
    }
}