import { BIG_SCREEN, CHANGE_INPUT, CHANGE_STYLE, CLEAR_ALL, CLEAR_LAST, CLOSE_ALERTS, SET_INPUT, SHOW_EQUAL, MODAL_SCREEN} from "./types";

export function changeStyle() {
    return {
        type: CHANGE_STYLE,
    }
}

export function changeInput(value: string) {
    return {
        type: CHANGE_INPUT,
        payload: value
    }
}

export function showEqual(value: string) {
    return {
        type: SHOW_EQUAL,
        payload: value
    }
}

export function setInput() {
    return {
        type: SET_INPUT
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL,
    }
}

export function deleteLast() {
    return {
        type: CLEAR_LAST,
    }
}

export function bigSreen() {
    return {
        type: BIG_SCREEN
    }
}

export function closeAlerts() {
    return {
        type: CLOSE_ALERTS
    }
}

export function modal() {
    return { 
        type: MODAL_SCREEN
    }
}