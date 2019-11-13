import React from "react";
import WaveForm from "../waveform/waveform";
import { withRouter } from "react-router-dom";
import CommentIndex from "../comments/comment_index";
import { Footer } from "../footer/footer";
class SongShowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playStatus: this.props.playing,
      title: "",
      artist: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.songId);
    this.props.fetchSong(this.props.match.params.songId);
  }
  toggle() {
    if (!this.props.playing) {
      this.props.playSong();
    } else {
      this.props.pauseSong();
    }

    this.setState({ playStatus: !this.props.playing });
    this.props.receiveCurrentSong(this.props.song);
  }

  render() {
    const comments = this.props.song ? (
      <CommentIndex
        ownerImage={this.props.song.userImage}
        currentUser={this.props.currentUser}
        comments={comments}
        songId={this.props.song.id}
        songOwner={this.props.song.songOwner}
        songOwnerId={this.props.song.songOwnerId}
        currentUserId={this.props.currentUserId}
      />
    ) : null;
    let waveform;
    let info;
    let genre;
    if (this.props.song) {
      waveform = (
        <WaveForm song={this.props.song} fetchSong={this.props.fetchSong} />
      );
      info = (
        <div className="play-pause-show-info">
          <p className="play-pause-show-artist">{this.props.song.artist}</p>
          <p className="play-pause-show-title">{this.props.song.title}</p>
        </div>
      );
      genre = <p className="play-pause-show-genre">#{this.props.song.genre}</p>;
    }
    return (
      <>
        <div className="song-show-page">
          <div className="hero-song-display">
            <div className="play-pause-show-container">
              <img
                className="play-pause-show"
                onClick={this.toggle}
                src={this.props.playing ? window.hivePause : window.hiveButton}
              />
              {info}
            </div>
            {genre}
            <div className="wave-container">{waveform}</div>
            <img
              src={this.props.song ? this.props.song.imageUrl : ""}
              className="large-ablum-cover"
            />
          </div>
        </div>
        {comments}
        <Footer />
      </>
    );
  }
}

export default withRouter(SongShowPage);
