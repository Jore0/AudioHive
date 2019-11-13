import * as APIUtil from "../util/session_util_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user.user
  };
};
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});
const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch =>
  APIUtil.login(user).then(
    function(currentUser) {
      return dispatch(receiveCurrentUser(currentUser));
    },
    error => dispatch(receiveErrors(error.responseJSON))
  );

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    error => dispatch(receiveErrors(error.responseJSON))
  );
