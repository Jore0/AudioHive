import { connect } from "react-redux";
import LoginNav from "./login_nav";
import { logout, login } from "../../actions/session_action";
import { fetchSongs, fetchSong } from "../../actions/song_actions";
import { receiveCurrentSong } from "../../actions/song_actions";
import { openModal } from "../../actions/modal_actions";

const msp = state => {
  // debugger
  return {
    songs: Object.values(state.entities.songs),
    currentUser: state.entities.users[state.session.id]
  };
};
const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: id => dispatch(fetchSong(id)),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  playsong: () => dispatch(playsong()),
  pausesong: () => dispatch(pausesong()),
  updateCurrentSongTime: time => dispatch(updatCurrentSongTime(time)),
  resetCurrentSong: () => dispatch(resetCurrentSong()),
  receiveCurrentSong: () => dispatch(receiveCurrentSong(song)),
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  msp,
  mdp
)(LoginNav);
