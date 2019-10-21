import * as APIUtil from "../util/user_info_util";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = payload => {
  debugger;
  return {
    type: RECEIVE_USER,
    songs: payload.songs,
    user: plaload.user
  };
};

export const fetchuser = id => dispatch =>
  APIUtil.fetchUser(id).then(payload => dispatch(receiveUser(payload)));
