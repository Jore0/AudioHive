import React from "react";
import WaveForm from "../waveform/waveform";
import { withRouter } from "react-router-dom";

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      playStatus: this.props.playing
    };
    // this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.match.params.userId);
  }
  // toggle() {
  //   if (!this.props.playing) {
  //     // status = 'pause';
  //     this.props.playSong();
  //   } else {
  //     // status = 'play'9k
  //     this.props.pauseSong();
  //   }
  //   // debugger
  //   this.setState({ playStatus: !this.props.playing });
  //   this.props.receiveCurrentSong(this.props.song);
  // }

  render() {
    // debugger
    // let waveform;
    // let info;
    // let genre;
    // if (this.props.song) {
    //   waveform = (
    //     <WaveForm song={this.props.song} fetchSong={this.props.fetchSong} />
    //   );
    //   info = (
    //     <div className="play-pause-show-info">
    //       <p className="play-pause-show-artist">{this.props.song.artist}</p>
    //       <p className="play-pause-show-title">{this.props.song.title}</p>
    //     </div>
    //   );
    //   genre = <p className="play-pause-show-genre">#{this.props.song.genre}</p>;
    // }
    return <h1>HELLO</h1>;
    //     <div className="song-show-page">
    //       <div className="hero-song-display">
    //         <div className="play-pause-show-container">
    //           <img
    //             className="play-pause-show"
    //             onClick={this.toggle}
    //             src={this.props.playing ? window.hivePause : window.hiveButton}
    //           />
    //           {info}
    //         </div>
    //         {genre}
    //         {waveform}
    //         <img
    //           src={this.props.song ? this.props.song.imageUrl : ""}
    //           className="large-ablum-cover"
    //         />
    //       </div>
    //     </div>
    //   );
    // }
  }
}

export default withRouter(UserShowPage);
