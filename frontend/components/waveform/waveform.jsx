import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import {
  playSong,
  pauseSong,
  updateCurrentSongTime,
  resetCurrentSong
} from "../../actions/current_song_actions";
class WaveForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readyToPlay: false,
      duration: this.props.song.duration || 0,
      loading: true
    };
    this.is_Mounted;
    this.waveform = React.createRef();
    this.seekBar = React.createRef();
    this.wavesurfer = null;

    this.showWaveSurfer = this.showWaveSurfer.bind(this);
    this.StartPlay = this.StartPlay.bind(this);
  }
  componentDidMount() {
    this.props.fetchSong(this.props.song.id);
    this.showWaveSurfer();
    this.is_Mounted = true;
  }
  componentWillUnmount() {
    this.is_Mounted = false;
  }

  StartPlay() {
    this.wavesurfer.playPause();
  }

  showWaveSurfer() {
    // debugger
    this.wavesurfer = WaveSurfer.create({
      container: this.waveform.current,
      waveColor: "#cdcfd1",
      progressColor: "#f50",
      cursorColor: "transparent",

      barGraph: 10,
      barHeight: 0.75,
      barWidth: 2
    });
    this.wavesurfer.load(this.props.song.songUrl);

    this.wavesurfer.on("ready", () => {
      // debugger;
      if (this.is_Mounted) {
        this.setState({ readyToPlay: true, loading: false });
      }
    });
  }
  secondsToMinutes(time) {
    // debugger
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  render() {
    let maxy;
    let currentTime;
    let totalLength;
    let loader;
    if (this.wavesurfer) {
      this.seekBar.current.value = 0;
      currentTime = this.secondsToMinutes(
        this.props.currentTime * this.wavesurfer.getDuration()
      );
      totalLength = this.secondsToMinutes(this.wavesurfer.getDuration());
    }
    if (
      this.wavesurfer &&
      this.props.playing &&
      this.props.song.id === this.props.currentSongId
    ) {
      this.wavesurfer.seekTo(this.props.currentTime);

      maxy = this.wavesurfer.getDuration();

      this.seekBar.current.value =
        this.props.currentTime * this.wavesurfer.getDuration() || "0";
    }
    if (this.state.loading) {
      loader = (
        <Loader
          className="loader"
          type="Bars"
          color="#cdcfd1"
          height={50}
          width={80}
        />
      );
    }

    return (
      <>
        <div className="wave-form-container">
          <input
            className="blackSeekbar"
            ref={this.seekBar}
            type="range"
            min="0"
            max={maxy}
          />

          <div className="wave-form-times">
            <p className="wave-form-orange">{currentTime}</p>
            <p className="wave-form-transparent">{totalLength}</p>
          </div>
          {loader}
          <div className="wave" ref={this.waveform}></div>
        </div>
      </>
    );
  }
}

const msp = (state, ownProps) => {
  // debugger
  return {
    currentUserId: state.session.id,
    currentSong: state.entities.songs[state.ui.currentSong.id],
    currentTime: state.ui.currentSong.currentTime,
    currentSongId: state.ui.currentSong.id,
    playing: state.ui.currentSong.playing
  };
};

const mdp = dispatch => ({
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});

export default connect(
  msp,
  mdp
)(WaveForm);
