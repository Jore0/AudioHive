import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal_actions";
import {RECEIVE_LOGIN_INFO} from "../actions/initial_session_form_actions"
const modalReducer =(state = null, action)=>{
    switch(action.type){
        case OPEN_MODAL:
            return action.modal
        case CLOSE_MODAL:
            return null
        case RECEIVE_LOGIN_INFO:
            return action.formType

        default: 
            return state;


    }
}

export default modalReducer