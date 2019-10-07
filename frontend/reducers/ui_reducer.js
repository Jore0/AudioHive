import {combineReducers} from "redux"; 
import modalReducer from "./modal_reducer";
import CurrentSongReducer from "./current_song_reducer";


export default combineReducers({
    modal: modalReducer,
    currentSong: CurrentSongReducer
})