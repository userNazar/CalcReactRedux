import { combineReducers } from "redux";
import styleReducer from "./styleReducer";
import logicReducer from "./logicReducer";
import UIReducer from "./UIReducer";


const rootReducer = combineReducers({
    styles: styleReducer,
    logic: logicReducer,
    ui: UIReducer
})


export default rootReducer;