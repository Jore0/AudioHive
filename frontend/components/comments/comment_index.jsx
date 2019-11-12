import React from "react";
import { connect } from "react-redux";
import { fetchComments, createComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      song_time: "00:00",
      song_id: this.props.songId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearform = this.clearform.bind(this);
  }
  secondsToMinutes(time) {
    // debugger
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  clearform() {
    this.setState({ body: "", song_time: "00:00" });
  }
  handleSubmit(e) {
    e.preventDefault();
    let comment = Object.assign({}, this.state);
    this.props.createComment(comment).then(() => {
      this.clearform();
      this.props.fetchComments(this.state.song_id);
    });
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  createSongTime() {
    if (this.props.songId === this.props.currentSongId) {
      if (typeof this.props.currentTime === "undefined") {
        song_time = "00:00";
      } else {
        this.setState({
          song_time: this.secondsToMinutes(this.props.currentTime)
        });
      }
    } else {
      this.setState({ song_time: "00:00" });
    }
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
    const numComments = Object.values(this.props.comments).length;
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
        <div className="comment-form-container">
          <div className="comment-form">
            {userImage}
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Write a comment"
                value={this.state.body}
                onClick={this.createSongTime}
                onChange={this.update("body")}
              />
            </form>
          </div>
          <hr />
          <div className="inner-comment-container">
            {songOwnerImage}
            <div className="right-comment-container">
              <i className="fas fa-comment">
                <span className="comments"> {numComments} comments</span>
              </i>
              <div className="comments-index-container">{comments}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  comments: state.entities.comments,
  currentTime: state.ui.currentSong.currentTime,
  currentSongId: state.ui.currentSong.id
});

const mdp = dispatch => ({
  fetchComments: songId => dispatch(fetchComments(songId)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  msp,
  mdp
)(CommentIndex);
