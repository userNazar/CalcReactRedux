import { CHANGE_STYLE } from "./types"

const initialState = {
    bgBts: '',
    bgBg: '',
    bdDg: '',
    grBTN: '',
    gbBTN: '',
    gBTN: '',
}



export default function styleReducer(state: any = initialState, action: any) {
    switch (action.type) {

        case CHANGE_STYLE: 
            return {
                ...state,
                bgBts: state.bgBts === '' ? 'gray display__btn-element-rigth' : '',
                bdDg: state.bdDg === '' ? 'dark-green' : '',
                bgBg: state.bgBg === '' ? 'black-green' : '',
                grBTN: state.grBTN === '' ? 'gray__btn' : '',
                gbBTN: state.gbBTN === '' ? 'black-green__btn' : '',
                gBTN: state.gBTN === '' ? 'green__btn' : '',

            }

        default: return state
    }
}