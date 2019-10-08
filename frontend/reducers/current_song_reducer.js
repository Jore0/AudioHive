import {merge} from 'lodash';
import {LOGOUT_CURRENT_USER} from "../actions/session_action";
import {RECEIVE_CURRENT_SONG} from "../actions/song_actions"
import RECEIVE_ALL_SONGS from "../actions/song_actions";

const CurrentSongReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case LOGOUT_CURRENT_USER:
        return {}
        case RECEIVE_CURRENT_SONG: 
            return merge({}, state, { id: action.song.id, currentlyPlaying: "playing"})

        // case RECEIVE_ALL_SONGS: 
        // debugger
        // return merge({}, )

        default: 
        return state
    }

}

export default CurrentSongReducer