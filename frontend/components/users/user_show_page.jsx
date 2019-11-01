import React from "react";
import WaveForm from "../waveform/waveform";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateCurrentSongTime } from "../../actions/current_song_actions";

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: this.props.playing,
      profileImageUrl: null,
      uploadButton: false,
      username: ""
      // userPageId: this.props.user.id
    };
    this.mounted = false;
    this.toggle = this.toggle.bind(this);
    this.showUploadButton = this.showUploadButton.bind(this);
    this.hideUploadButton = this.hideUploadButton.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
  }
  showUploadButton() {
    this.setState({ uploadButton: true });
  }
  hideUploadButton() {
    this.setState({ uploadButton: false });
  }
  handleImageFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("user[id]", this.props.currentUserId);
    formData.append("user[image_url]", file);
    // debugger;
    this.props.updateUser(formData);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchUser(this.props.match.params.userId);
    debugger;
    this.setState({
      color: this.props.currentUserId % 360
      // username: this.props.user.username
    });
    this.mounted = true;
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
      background: `linear-gradient(to right, hsla(${this.state.color}, 50% , 50%, 0.7) 0%,  #70929c 115% )`
    };
    let styleImage;
    let songs;
    if (this.props.songs.length < 1 && this.props.currentUserId) {
      <Link to="/upload" className={"orange-button"}>
        Upload now
      </Link>;
    } else if (this.props.songs.length < 1) {
      <div className="noSongs-container">
        <h1>This user has no songs...</h1>
        <Link to="/discover" className={"orange-button"}>
          Discover Songs
        </Link>
        ;
      </div>;
    } else {
      songs = this.props.songs.map(song => {
        // debugger;
        return (
          <div key={song.id} className="medium-waveform-container">
            <img src={song.imageUrl} className="medium-image" />
            <div className="medium-info-container">
              <img
                id={song.id}
                className="play-pause-show-medium"
                onClick={this.toggle}
                src={
                  this.props.playing && song.id === this.props.currentSongId
                    ? window.hivePause
                    : window.hiveButton
                }
              />
              <div className="medium-user-song-info">
                <p className="username">{this.state.username}</p>

                <Link to={`/songs/${song.id}`} className="songtitle">
                  {song.title}
                </Link>
              </div>
            </div>
            <WaveForm song={song} fetchSong={this.props.fetchSong} />
          </div>
        );
      });
    }
    let profile;
    let info;

    if (this.mounted) {
      if (this.props.user) {
        info = (
          <div className="user-info">
            <p className="user-title">{this.props.user.username}</p>
          </div>
        );
        let initials = this.props.user.username[0].toUpperCase();
        if (this.props.user.profileImageUrl) {
          styleImage = {
            "background-image": `url(${this.props.user.profileImageUrl})` || " "
          };
          debugger;
          profile = (
            <div className="user-image-container">
              <div
                className="user-image"
                style={styleImage}
                onMouseEnter={this.showUploadButton}
                onMouseLeave={this.hideUploadButton}
              >
                <label
                  className={
                    this.state.uploadButton
                      ? "custom-image-upload"
                      : "custom-image-upload hide"
                  }
                >
                  <i className="fas fa-camera"></i>
                  <p>Upload image</p>
                  <input type="file" onChange={this.handleImageFile} />
                </label>
              </div>
            </div>
          );
        } else if (
          this.props.currentUserId === this.props.user.id &&
          !this.state.profileImageUrl
        ) {
          debugger;
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
        } else {
          profile = <div className="profile-pic">{initials}</div>;
        }
      }
    }

    return (
      <div className="user-page-container">
        <div className="user-show-page" style={styleColor}>
          <div className="hero-user-display">
            {profile || ""}
            {info || ""}
          </div>
        </div>
        {songs || ""}
      </div>
    );
  }
}

export default withRouter(UserShowPage);
