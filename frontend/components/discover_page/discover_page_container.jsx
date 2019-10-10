import { connect } from 'react-redux';
import DiscoverPage from './discover_page';
import { fetchSongs, fetchSong} from '../../actions/song_actions';
import {receiveCurrentSong} from "../../actions/song_actions";

const msp = state => ({
    songs: Object.values(state.entities.songs),
    currentSong: state.entities.songs[state.ui.currentSong],
})

const mdp = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    playsong: () => dispatch(playsong()),
    pausesong: () => dispatch(pausesong()),
    updateCurrentSongTime: (time) => dispatch(updatCurrentSongTime(time)),
    resetCurrentSong: () => dispatch(resetCurrentSong()),
    receiveCurrentSong: () => dispatch(receiveCurrentSong(song))
})

export default connect(msp, mdp)(DiscoverPage)