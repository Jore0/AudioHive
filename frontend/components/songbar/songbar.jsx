import React from "react";


class SongBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            duration: this.props.currentSong.duration,
            currentSong: this.props.currentSong,
            currentlyPlaying: "playing",
            volume: 0.5,
        }
        this.audio = React.createRef();
        this.reset = this.reset.bind
        this.toggle = this.toggle.bind(this)
    }
    secondsToMinutes(time) { 
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) 
    }
    componentDidUpdate(prevProps){
        if (prevProps.currentSong !== this.props.currentSong){
            this.setState({ currentSong: this.props.currentSong.songUrl})
        }
    }
    toggle() {
        let status = this.state.currentlyPlaying;
        let song = this.audio.current
        // let song = document.getElementById(this.props.song.title)
        // debugger
        if (status === "playing") {
            status = 'pause';
            song.play();
        } else {
            status = 'playing'
            song.pause();
        }
        this.setState({ currentlyPlaying: status })
    }
    resetSong(){
        let song = this.audio.current
        song.load()
        let status = 'playing'
        this.setState({ currentlyPlaying: status })
    }



    render(){
        const status = this.state.currentlyPlaying ? window.play : window.pause
        let currentSong = this.state.currentSong
        let duration = this.secondsToMinutes(this.state.duration)
        let start = this.secondsToMinutes(0)
        return(
            <div className="songBar-container">
                <section className="songBar-container-parts">
                    <audio ref={this.audio} src={this.props.currentSong.songUrl} type="audio/mp3" preload="auto" />
                    <button className="songBar-control left">{window.left}</button>
                    <button className="songBar-control play pause">{status}</button>
                    <button className="songBar-control right">{window.right}</button>
                    <div className="seek-bar-container">
                        <input type="range" min={start} max={duration} />
                    </div>
                    <div className="seek-bar-volume-container">
                        <input type="range" min="0.0" max="1.0"step="0.05"/>
                    </div>
                    <div className="song-bar-info-container">
                        <img src={currentSong.imageUrl} />
                    </div>
                </section>

            </div>
        )
    }

}

export default SongBar