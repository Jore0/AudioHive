import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import  SongsReducer  from "./songs_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    songs: SongsReducer
})

export default entitiesReducer
