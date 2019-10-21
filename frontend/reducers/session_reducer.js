import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_action";
import { RECEIVE_LOGIN_INFO } from "../actions/initial_session_form_actions";

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return { id: action.currentUser.id };

    case LOGOUT_CURRENT_USER:
      return _nullUser;

    case RECEIVE_LOGIN_INFO:
      return Object.assign({}, state, { currentUserEmail: action.email });

    default:
      return state;
  }
};

export default sessionReducer;
