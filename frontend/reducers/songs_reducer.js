import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG,
  REMOVE_SONG
} from "../actions/song_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import merge from "lodash/merge";

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  //   debugger;
  switch (action.type) {
    case RECEIVE_USER:
      // debugger;
      // return merge({}, action.songs);
      return action.songs;

    case RECEIVE_ALL_SONGS:
      return action.songs;

    case RECEIVE_SONG:
      // debugger
      // debugger;
      return merge({}, state, { [action.song.id]: action.song });

    case REMOVE_SONG:
      let nextState = merge({}, state);
      delete nextState[action.songId];
      return nextState;

    default:
      return state;
  }
};

export default SongsReducer;
