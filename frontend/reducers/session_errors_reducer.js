import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER
} from "../actions/session_action";
import {OPEN_MODAL} from "../actions/modal_actions"

const sessionErrorsReducer = (state =[], action) =>{
    // debugger
    Object.freeze(state);
    debugger
    switch(action.type){
        case RECEIVE_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return [];
        case OPEN_MODAL:
            return [];

        default:
            return state;
    }
}

export default sessionErrorsReducer;