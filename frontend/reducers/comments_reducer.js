import { RECIEVE_COMMENTS, RECIEVE_COMMENT } from "../actions/comment_actions";
import merge from "lodash/merge";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIEVE_COMMENTS:
      return action.comments;
    case RECIEVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};

export default CommentsReducer;
