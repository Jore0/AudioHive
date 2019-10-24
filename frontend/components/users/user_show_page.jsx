import React from "react";
import WaveForm from "../waveform/waveform";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { sign } from "crypto";

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: this.props.playing,
      profileImageUrl: null
      // userPageId: this.props.user.id
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
  }

  handleSubmit() {
    const formData = new FormData();
    if (this.state.profileImageUrl) {
      formData.append("user[id]", this.props.currentUserId);
      formData.append("user[image_url]", this.state.photoFile);
      debugger;
      this.props.updateUser(formData);
    }
  }

  handleImageFile(e) {
    e.preventDefault();
    debugger;

    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      debugger;
      this.setState({
        profileImageUrl: file,
        errors: [],
        imageUrl: fileReader.result
      });
    };
    debugger;
    this.handleSubmit();
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({
        errors: ["Please upload an image file"]
      });
    }
  }
  componentDidMount() {
    // debugger;
    this.props.fetchUser(this.props.match.params.userId);
    this.setState({ color: this.props.currentUserId % 360 });
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger;
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
    this.setState({ playStatus: !this.props.playing });
    this.props.receiveCurrentSong(song);
  }

  render() {
    let styleColor = {
      background: `linear-gradient(to right, hsla(${this.state.color}, 50% , 50%, 0.7) 0%, hsla(0, 0%, 100%, 0.7) 115% )`
    };
    let songs;
    // debugger;
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
        // debugger;
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
    // debugger;
    let profile;
    let initials = this.props.user.username[0].toUpperCase();
    if (this.state.profileImageUrl) {
      profile = <img src={this.state.profileImageUrl} />;
    } else if (
      this.props.currentUserId === this.props.user.id &&
      !this.state.profileImageUrl
    ) {
      profile = (
        <div className="profile-pic">
          {initials}
          <i className="fas fa-camera"></i>
          <label className="custom-image-upload">
            Upload image
            <input type="file" onChange={this.handleImageFile} />
          </label>
        </div>
      );
    }

    // profile = <div className="profile-pic">{initials}</div>;

    return (
      <div className="user-page-container">
        <div className="user-show-page" style={styleColor}>
          fafaer
          <div className="hero-song-display">{profile}</div>
        </div>
        {songs}
      </div>
    );
  }
}

export default withRouter(UserShowPage);
