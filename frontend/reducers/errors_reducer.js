import {combineReducers} from "redux";
import sessionReducer from "./session_reducer";


const errorsReducer = combineReducers({
    session: sessionReducer,
})
export default errorsReducer;