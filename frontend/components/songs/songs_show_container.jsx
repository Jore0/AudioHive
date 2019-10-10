import React from "react"
import { connect } from 'react-redux';
import { fetchSong } from "../../actions/song_actions";
import { receiveCurrentSong } from "../../actions/song_actions";
import SongShowPage from './songs_show';

const msp = (state, ownProps) => {
    debugger 
    return ({
        currentUserId: state.session.id,
        currentSong: state.entities.songs[state.ui.currentSong.id],
        song: state.entities.songs[ownProps.match.params.songId]
    })
}

const mdp = dispatch => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
})

export default connect(msp, mdp)(SongShowPage)