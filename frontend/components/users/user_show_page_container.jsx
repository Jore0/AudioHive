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
import { fetchUser, updateUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  debugger;
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id,
    songs:
      Object.values(state.entities.songs).length >= 1
        ? Object.values(state.entities.songs).filter(song => {
            return song.songOwnerId === parseInt(ownProps.match.params.userId);
          })
        : Object.values(state.entities.songs),
    // songs:
    //   Object.values(state.entities.songs).length >= 1
    //     ? state.entities.users[ownProps.match.params.userId].song_ids.map(
    //         songId => {
    //           return state.entities.songs[songId];
    //         }
    //       )
    //     : Object.values(state.entities.songs),
    playing: state.ui.currentSong.playing,
    currentSongId: state.ui.currentSong.id
  };
};

const mdp = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
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
