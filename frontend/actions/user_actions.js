import * as APIUtil from "../util/user_info_util";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";

const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    songs: payload.songs || {},
    user: payload.user
  };
};

export const fetchUser = id =>
  function(dispatch) {
    APIUtil.fetchUser(id).then(payload => {
      return dispatch(receiveUser(payload));
    });
  };

export const updateUser = user => dispatch =>
  APIUtil.updateUser(user).then(payload => {
    return dispatch(receiveUser(payload));
  });
