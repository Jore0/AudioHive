import React from "react";
import SongButton from "../song_button/song_button";
import SongCarousel from "../song_button/song_carousel";
import { withRouter } from "react-router-dom";
import { Footer } from "../footer/footer";
class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
    return (
      <>
        <div className="discover-page-container">
          <h1 className="song-list-header">New Music Now</h1>
          <p className="song-list-subheader">
            The latest hits, updated all the time
          </p>
          <div className="discover-songs">
            <SongCarousel
              songs={songs}
              receiveCurrentSong={this.props.receiveCurrentSong}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(DiscoverPage);
