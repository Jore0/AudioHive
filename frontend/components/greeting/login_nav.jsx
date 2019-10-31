import React from "react";
import SongButton from "../song_button/song_button";
import SongCarousel from "../song_button/song_carousel";
import { Link } from "react-router-dom";
class LoginNav extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // debugger;
    this.props.fetchSongs();
  }
  render() {
    const songs = this.props.songs.map(song => {
      return (
        <SongButton
          key={song.id}
          song={song}
          receiveCurrentSong={this.props.receiveCurrentSong}
        />
      );
    });
    if (this.props.currentUser) {
      return null;
    } else {
      return (
        <>
          <div className="hero-image">
            <nav className="login-signup">
              <img src={window.mini} className="mini-logo" />
              <div className="buttons">
                <button
                  className="clear-button"
                  onClick={() => this.props.openModal("initial")}
                >
                  Sign in
                </button>
                <button
                  className="orange-button"
                  onClick={() => this.props.openModal("initial")}
                >
                  Create Account
                </button>
                <button
                  className="clear-button"
                  onClick={() =>
                    this.props.login({
                      email: "test@gmail.com",
                      password: "password"
                    })
                  }
                >
                  Demo Login
                </button>
              </div>
            </nav>
            <div className="hero-image-text">
              <h1>Discover more with SoundCloud Go+</h1>
              <h2>
                SoundCloud Go+ lets you listen offline, ad-free, with over 150
                million tracks — and growing.
              </h2>
            </div>
          </div>

          <div className="discover-page-container home">
            <h1 className="song-list-header home">Discover trending music</h1>
            <p className="song-list-subheader-title">
              The latest hits, updated all the time
            </p>
            <div className="discover-songs">
              <SongCarousel
                songs={songs}
                receiveCurrentSong={this.props.receiveCurrentSong}
              />
            </div>
          </div>
        </>
      );
    }
  }
}

export default LoginNav;
