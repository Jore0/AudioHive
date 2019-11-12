import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";
import CommentItem from "./comment_item";
class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    const comments = Object.values(this.props.comments).map(comment => {
      return (
        <CommentItem
          key={comment.id}
          id={comment.id}
          username={comment.username}
          body={comment.body}
          song_time={comment.song_time}
          userId={comment.user_id}
          songId={comment.song_id}
          parentId={comment.parent_comment_id}
          imageUrl={comment.imageUrl}
        />
      );
    });
    const userImage = this.props.currentUser.profileImageUrl ? (
      <img src={this.props.currentUser.profileImageUrl} alt="" />
    ) : (
      <p> {this.props.currentUser.username[0].toUpperCase()}</p>
    );
    debugger;
    const songOwnerImage = this.props.ownerImage ? (
      <img src={this.props.ownerImage} className="songOwnerImage" />
    ) : null;
    return (
      <div className="comments-container">
        {songOwnerImage}
        <div className="comment-form-container">
          {userImage}
          <form action="">
            <input type="text" placeholder="Write a comment" />
          </form>
        </div>

        <hr />

        <div className="comments-index-container">{comments}</div>
      </div>
    );
  }
}

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
