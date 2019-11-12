import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="single-comment-container">
          <img src={this.props.imageUrl} className="profile-comment-pic" />
          <div className="comment-information">
            <div className="comment-owner">
              <p>
                {this.props.username} at {this.props.song_time}{" "}
              </p>
            </div>
            <p>{this.props.body}</p>
          </div>
        </div>
      </>
    );
  }
}

const mdp = dispatch => ({
  fetchComments: songId => dispatch(fetchComments(songId))
});

export default connect(
  null,
  mdp
)(CommentItem);
