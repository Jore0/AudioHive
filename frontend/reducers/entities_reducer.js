import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import SongsReducer from "./songs_reducer";
import CommentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: SongsReducer,
  comments: CommentsReducer
});

export default entitiesReducer;
