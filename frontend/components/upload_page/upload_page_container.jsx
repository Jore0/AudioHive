import {connect} from 'react-redux';
import {uploadSong} from "../../actions/song_actions";
import UploadPage from "./upload_page";


const msp = (state, ownProps) => ({
    userId: state.session.id
})
const mdp = dispatch => ({
    uploadSong: (song) => dispatch(uploadSong(song))
    
})

export default connect(msp, mdp)(UploadPage)