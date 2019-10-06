import { connect } from 'react-redux';
import DiscoverPage from './discover_page';
import { fetchSongs, fetchSong} from '../../actions/song_actions';

const msp = state => ({
    songs: Object.values(state.entities.songs)
})

const mdp = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id))

})

export default connect(msp, mdp)(DiscoverPage)