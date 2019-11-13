import React from "react";
import { connect } from "react-redux";
import { fetchComments, createComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";
import { Link } from "react-router-dom";

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
    this.createSongTime = this.createSongTime.bind(this);
  }
  secondsToMinutes(time) {
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
        this.setState({
          song_time: "00:00"
        });
      } else {
        let time = this.secondsToMinutes(this.props.currentTimeMins);
        this.setState({
          song_time: time
        });
      }
    }
  }

  render() {
    const creatorLink = this.props.songOwnerId ? (
      <p>
        Creator:{" "}
        <Link to={`/users/${this.props.songOwnerId}`}>
          {this.props.songOwner}
        </Link>
      </p>
    ) : null;
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
      <div className="small-profile-pic-square">
        <p> {this.props.currentUser.username[0].toUpperCase()}</p>
      </div>
    );

    const songOwnerImage = this.props.ownerImage ? (
      <img src={this.props.ownerImage} className="songOwnerImage" />
    ) : (
      <div className="small-profile-pic">
        <p> {this.props.songOwner[0].toUpperCase()}</p>
      </div>
    );
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
            <div className="left-comment-container">
              {songOwnerImage}
              {creatorLink}
            </div>

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
  currentTimeMins: state.ui.currentSong.currentTimeMins,
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
