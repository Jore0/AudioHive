import * as APIUtil from '../util/session_util_api_util';
export const RECEIVE_LOGIN_INFO = "RECEIVE_LOGIN_INFO";

const receiveLoginInfo = (userInfo) => ({
    type: RECEIVE_LOGIN_INFO,
    formType: userInfo.formType,
    email: userInfo.email
})

///session slice of state  under a ke of eamil 
const receiveErrors = (errors) => ({
    type: "RECEIVE_ERRORS",
    errors
}) 

export const nextForm = (email) => dispatch => (
    APIUtil.emailValidate(email).then(
        (loginInfo) => dispatch(receiveLoginInfo(loginInfo)), error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
);


// thunk action 
// redirect and dispatch receiveLoginInfo