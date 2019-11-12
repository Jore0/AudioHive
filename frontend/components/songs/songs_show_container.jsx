import React from "react";
import { connect } from "react-redux";
import { receiveCurrentSong, fetchSong } from "../../actions/song_actions";
import SongShowPage from "./songs_show";
import {
  playSong,
  pauseSong,
  updateCurrentSongTime,
  resetCurrentSong
} from "../../actions/current_song_actions";
import { fetchComments } from "../../actions/comment_actions";

const msp = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    currentSong: state.entities.songs[state.ui.currentSong.id],
    song: state.entities.songs[ownProps.match.params.songId],
    playing: state.ui.currentSong.playing,
    comments: state.entities.comments
  };
};

const mdp = dispatch => ({
  fetchComments: songId => dispatch(fetchComments(songId)),
  fetchSong: id => dispatch(fetchSong(id)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
  resetCurrentSong: () => dispatch(resetCurrentSong()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
});

export default connect(
  msp,
  mdp
)(SongShowPage);
