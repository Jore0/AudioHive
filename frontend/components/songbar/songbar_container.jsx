import React from "react"
import { connect } from 'react-redux';
import SongBar from './songbar';
import {receiveCurrentSong} from "../../actions/song_actions";



const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    currentSong: state.entities.songs[state.ui.currentSong.id]
})

const mdp = dispatch => ({
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
})

export default connect(msp, mdp)(SongBar)
