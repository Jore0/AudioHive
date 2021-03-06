import { merge } from "lodash";
import { LOGOUT_CURRENT_USER } from "../actions/session_action";
import {
  RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  PAUSE_SONG,
  UPDATE_CURRENT_SONG_TIME,
  RESET_CURRENT_SONG,
  CURRENT_SONG_TIME_MINS
} from "../actions/current_song_actions";

const notPlaying = { playing: false, currentTime: 0 };
const CurrentSongReducer = (state = notPlaying, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return merge({}, state, { id: action.song.id });

    case PLAY_SONG:
      return merge({}, state, { playing: true });

    case PAUSE_SONG:
      return merge({}, state, { playing: false });

    case UPDATE_CURRENT_SONG_TIME:
      return merge({}, state, { currentTime: action.time });

    case CURRENT_SONG_TIME_MINS:
      return merge({}, state, { currentTimeMins: action.min });

    case RESET_CURRENT_SONG:
      return merge({}, state, { currentTime: 0 });

    case LOGOUT_CURRENT_USER:
      let nextState = merge({}, state);
      delete nextState[action.id];
      //does this key into the state? I need to delete current song

      return merge({}, state, { playing: false });

    default:
      return state;
  }
};

export default CurrentSongReducer;
