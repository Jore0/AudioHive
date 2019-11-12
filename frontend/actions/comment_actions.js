import * as CommentUtil from "../util/comment_util";
export const RECIEVE_COMMENTS = "RECIEVE_ALL_COMMENTS";
export const RECIEVE_COMMENT = "RECIEVE_COMMENT";

const recieveComments = comments => {
  return {
    type: RECIEVE_COMMENTS,
    comments
  };
};
const recieveComment = comment => {
  return {
    type: RECIEVE_COMMENT,
    comment
  };
};

export const fetchComments = songId => dispatch =>
  CommentUtil.fetchComments(songId).then(comments =>
    dispatch(recieveComments(comments))
  );
export const createComment = comment => dispatch =>
  CommentUtil.createComment(comment).then(comment =>
    dispatch(recieveComment(comment))
  );
