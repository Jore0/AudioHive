import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";
import CommentIndex from "./comment_index";

const msp = (state, ownProps) => ({
  comments: state.entities.comments
});

const mdp = dispatch => ({
  fetchComments: songId => dispatch(fetchComments(songId))
});

export default connect(
  msp,
  mdp
)(CommentIndex);
