import React from "react";
import { connect } from 'react-redux';
import { receiveCurrentSong } from "../../actions/song_actions";

import {
    playSong, 
    pauseSong, 
    updateCurrentSongTime, 
    resetCurrentSong
} from '../../actions/current_song_actions'


class SongButton extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            playButton: false,
            playStatus: this.props.playing
        }
        this.toggle = this.toggle.bind(this);
        this.showPlayButton = this.showPlayButton.bind(this);
        this.hidePlayButton = this.hidePlayButton.bind(this)
   
    }
    showPlayButton(){
        this.setState({ playButton: true })
    }
    hidePlayButton(){
        this.setState({ playButton: false })
    }

    toggle(){
        // let status = this.state.playStatus;
            // debugger
        if(!this.props.playing){
            // status = 'pause';
            this.props.playSong()
        }else {
            // status = 'play'9k
            this.props.pauseSong()
        }
        debugger
        this.setState({playStatus:  !this.props.playing, playButton: !this.props.playing})
        this.props.receiveCurrentSong(this.props.song)
    }
    
    render() {
        // debugger
        let togglebutton;
        const albumCover = {
            backgroundImage: `url(${this.props.song.imageUrl})`
        }
        if (this.state.playButton){
            togglebutton = <img onClick={this.toggle} id="playButton" src={!this.state.playStatus ? window.hiveButton : window.hivePause} alt="play" className="playButton"/>
        }
    
        return (
        <>
            <div className="entire-song-button"> 
            <div className="song-button-container"
                style={albumCover}  
                onMouseEnter={this.showPlayButton}
                onMouseLeave={this.hidePlayButton}
                // onClick={this.toggle}
                >
                {/* <audio id={this.props.song.title} src={this.props.song.songUrl} type="audio/mp3" preload="auto"/> */}
                {togglebutton}
            </div>
            <h1 className="song-detail">{this.props.song.title} - {this.props.song.artist} </h1>
                </div>
            </>
        )
    }
}



const msp = state => {
    return ({
        playing: state.ui.currentSong.playing,
        currentlyPlaying: state.ui.currentSong.currentlyPlaying, 
        curentTime: state.ui.currentSong.currentTime, 
        
    })
}

const mdp = dispatch => ({
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    updateCurrentSongTime: (time) => dispatch(updateCurrentSongTime(time)), 
    resetCurrentSong: () => dispatch(resetCurrentSong()), 
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
})

export default connect(msp, mdp)(SongButton)
