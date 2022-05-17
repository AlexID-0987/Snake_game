import {combineReducers, createStore} from "redux";
import Move from "./Snake-reduser";
import userReduser from "./User-reduser";
let redusers=combineReducers({
     move:Move,
     us:userReduser
})

let store=createStore(redusers)
export default store