import React from "react";
import { connect } from "react-redux";
import SongBar from "./songbar";
import { receiveCurrentSong } from "../../actions/song_actions";
import { fetchSong } from "../../actions/song_actions";
import {
  playSong,
  pauseSong,
  updateCurrentSongTime,
  resetCurrentSong,
  currentSongTimeMins
} from "../../actions/current_song_actions";

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentSong: state.entities.songs[state.ui.currentSong.id],
    currentlyPlaying: state.ui.currentSong.currentlyPlaying,
    playing: state.ui.currentSong.playing,
    currentTime: state.ui.currentSong.currentTime
  };
};

const mdp = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
  resetCurrentSong: () => dispatch(resetCurrentSong()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  currentSongTimeMins: min => dispatch(currentSongTimeMins(min))
});

export default connect(
  msp,
  mdp
)(SongBar);
