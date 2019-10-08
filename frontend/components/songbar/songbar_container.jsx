import React from "react"
import { connect } from 'react-redux';
import SongBar from './songbar';
import {receiveCurrentSong} from "../../actions/song_actions";
import {fetchSong} from "../../actions/song_actions"



const msp = state => {
    debugger
    return (
    {currentUser: state.entities.users[state.session.id],
    currentSong: state.entities.songs[state.ui.currentSong.id],
    currentlyPlaying: state.ui.currentSong.currentlyPlaying
         }
    )
}

const mdp = dispatch => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
})

export default connect(msp, mdp)(SongBar)
