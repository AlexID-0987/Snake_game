import {combineReducers, createStore} from "redux";
import Move from "./Snake-reduser";
let redusers=combineReducers({
     move:Move
})

let store=createStore(redusers)
export default store