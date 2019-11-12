import React from "react";
import { connect } from "react-redux";
import { receiveCurrentSong } from "../../actions/song_actions";
import { Link } from "react-router-dom";

import {
  playSong,
  pauseSong,
  updateCurrentSongTime,
  resetCurrentSong
} from "../../actions/current_song_actions";

class SongButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: false,
      playStatus: this.props.playing
    };
    this.toggle = this.toggle.bind(this);
    this.showPlayButton = this.showPlayButton.bind(this);
    this.hidePlayButton = this.hidePlayButton.bind(this);
  }
  showPlayButton() {
    this.setState({ playButton: true });
  }
  hidePlayButton() {
    this.setState({ playButton: false });
  }

  toggle() {
    // let status = this.state.playStatus;
    // debugger

    if (!this.props.playing) {
      // status = 'pause';
      this.props.playSong();
    } else {
      // status = 'play'9k
      this.props.pauseSong();
    }
    // debugger
    this.setState({
      playStatus: !this.props.playing,
      playButton: !this.props.playing
    });
    this.props.receiveCurrentSong(this.props.song);
  }

  render() {
    // debugger
    let togglebutton;
    const albumCover = {
      backgroundImage: `url(${this.props.song.imageUrl})`
    };
    if (this.state.playButton) {
      // if (true){
      // debugger
      togglebutton = (
        <img
          onMouseEnter={this.showPlayButton}
          onMouseLeave={this.hidePlayButton}
          onClick={this.toggle}
          className="playButton"
          src={!this.props.playing ? window.hiveButton : window.hivePause}
          src={
            !(
              this.props.playing &&
              this.props.song.id === this.props.currentSongId
            )
              ? window.hiveButton
              : window.hivePause
          }
          alt="play"
          className="playButton"
        />
      );
    }

    return (
      <>
        <div className="entire-song-button">
          <Link
            to={`/songs/${this.props.song.id}`}
            className="song-button-container"
            style={albumCover}
            onMouseEnter={this.showPlayButton}
            onMouseLeave={this.hidePlayButton}
          >
            {/* <audio id={this.props.song.title} src={this.props.song.songUrl} type="audio/mp3" preload="auto"/> */}
          </Link>
          {/* <div className=""> */}
          {togglebutton}
          {/* </div> */}
          <h1 className="song-detail">{this.props.song.title}</h1>
          <h2 className="song-list-subheader">{this.props.song.artist}</h2>
        </div>
      </>
    );
  }
}

const msp = state => {
  return {
    currentSong: state.entities.songs[state.ui.currentSong.id],
    playing: state.ui.currentSong.playing,
    currentSongId: state.ui.currentSong.id,
    currentlyPlaying: state.ui.currentSong.currentlyPlaying,
    currentTime: state.ui.currentSong.currentTime
  };
};

const mdp = dispatch => ({
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
  resetCurrentSong: () => dispatch(resetCurrentSong()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});

export default connect(
  msp,
  mdp
)(SongButton);
