import React from "react";
import WaveForm from "../waveform/waveform";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { sign } from "crypto";

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      playStatus: this.props.playing
      // userPageId: this.props.user.id
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    debugger;
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevProps.user.id !== this.props.user.id) {
      this.props.fetchUser(this.props.match.params.userId);
      this.setState({
        profileImageUrl: this.props.user.profileImageUrl,
        userPageId: this.props.user.id
      });
    }
  }
  toggle(e) {
    let song = this.props.songs.find(song => song.id === parseInt(e.target.id));
    if (!this.props.playing) {
      this.props.playSong();
    } else {
      this.props.pauseSong();
    }
    // debugger

    this.setState({ playStatus: !this.props.playing });

    this.props.receiveCurrentSong(song);
  }

  render() {
    let songs;
    debugger;
    if (this.props.songs.length < 1 && this.props.currentUserId) {
      <Link to="/upload" className={"orange-button"}>
        Upload now
      </Link>;
    } else if (this.props.songs.length < 1) {
      <div className="noSongs-container">
        <h1>This user has no songs...</h1>
        <Link to="/" className={"orange-button"}>
          Discover Songs
        </Link>
        ;
      </div>;
    } else {
      songs = this.props.songs.map(song => {
        debugger;
        return (
          <div key={song.id} className="small-waveform-container">
            <img src={song.imageUrl} />
            <img
              id={song.id}
              className="play-pause-show"
              onClick={this.toggle}
              src={
                this.props.playing && song.id === this.props.currentSongId
                  ? window.hivePause
                  : window.hiveButton
              }
            />
            <WaveForm song={song} fetchSong={this.props.fetchSong} />
          </div>
        );
      });
    }

    return (
      <div className="user-page-container">
        <div className="song-show-page">
          <div className="hero-song-display"></div>
        </div>
        {songs}
      </div>
    );
  }
}

export default withRouter(UserShowPage);
