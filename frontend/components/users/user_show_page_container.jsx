import React from "react";
import { connect } from "react-redux";
import { receiveCurrentSong, fetchSong } from "../../actions/song_actions";
import UserShowPage from "../users/user_show_page";
import {
  playSong,
  pauseSong,
  updateCurrentSongTime,
  resetCurrentSong
} from "../../actions/current_song_actions";
import { fetchUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  debugger;
  return {
    currentUserId: state.session.id,
    songs: state.entities.songs,
    playing: state.ui.currentSong.playing
    // user: state.entities.session.users[ownProps.match.params.userId]
  };
};

const mdp = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
  resetCurrentSong: () => dispatch(resetCurrentSong()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});

export default connect(
  msp,
  mdp
)(UserShowPage);
