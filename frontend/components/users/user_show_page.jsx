import React from "react";
import WaveForm from "../waveform/waveform";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateCurrentSongTime } from "../../actions/current_song_actions";
import { Footer } from "../footer/footer";

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: this.props.playing,
      profileImageUrl: null,
      uploadButton: false
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

    this.props.updateUser(formData);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);

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
    let name = this.props.user ? (
      <p className="username">{this.props.user.username}</p>
    ) : null;
    debugger;
    if (this.props.songs.length < 1 && this.props.currentUserId) {
      songs = (
        <div className="noSongs-container">
          <h1>You have no songs yet...</h1>
          <Link to="/upload" className={"orange-button-upload"}>
            Upload now
          </Link>
        </div>
      );
    } else if (this.props.songs.length < 1) {
      songs = (
        <div className="noSongs-container">
          <h1>This user has no songs...</h1>
          <Link to="/discover" className={"orange-button"}>
            Discover Songs
          </Link>
          ;
        </div>
      );
    } else if (this.mounted) {
      if (this.props.songs.length >= 1) {
        songs = this.props.songs.map(song => {
          return (
            <div key={song.id} className="medium-waveform-container">
              <img src={song.imageUrl} className="medium-image" />
              <div className="medium-info-container">
                <div className="wave-container">
                  <div className="button-info">
                    <img
                      id={song.id}
                      className="play-pause-show-medium"
                      onClick={this.toggle}
                      src={
                        this.props.playing &&
                        song.id === this.props.currentSongId
                          ? window.hivePause
                          : window.hiveButton
                      }
                    />
                    <div className="medium-user-song-info">
                      {name}
                      <Link to={`/songs/${song.id}`} className="songtitle">
                        {song.title}
                      </Link>
                    </div>
                  </div>

                  <WaveForm
                    song={song}
                    fetchSong={this.props.fetchSong}
                    user={this.props.user}
                  />
                </div>
              </div>
            </div>
          );
        });
      }
    }
    let profile;
    let info;
    let username;
    if (this.mounted) {
      if (this.props.user) {
        info = (
          <div className="user-info">
            <p className="user-title">{this.props.user.username}</p>
          </div>
        );
        let initials = <h1>{this.props.user.username[0].toUpperCase()}</h1>;

        if (this.props.user.profileImageUrl) {
          styleImage = {
            "background-image": `url(${this.props.user.profileImageUrl})` || " "
          };

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
          profile = (
            <div className="profile-pic">
              {initials}
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
        } else {
          profile = <div className="profile-pic">{initials}</div>;
        }
      }
    }

    return (
      <>
        <div className="user-page-container">
          <div className="user-show-page" style={styleColor}>
            <div className="hero-user-display">
              {profile || ""}
              {info || ""}
            </div>
          </div>
          {songs || ""}
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(UserShowPage);
