import React from "react";


class SongBar extends React.Component {
    constructor(props){
        super(props)
        // debugger
        this.state = {
            duration: 1,
            currentSong: "",
            currentlyPlaying: this.props.playing,
            volume: 0.5,
            readyToPlay: false,

        }
      
        this.audio = React.createRef();
        this.volumeBar = React.createRef();
        this.seekBar = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.changePlace = this.changePlace.bind(this);
        this.resetSong = this.resetSong.bind(this);
        this.controlVolume = this.controlVolume.bind(this);
        this.endSong = this.endSong.bind(this);
        this.loop = this.loop.bind(this);
        this.handlePlayPauseButton = this.handlePlayPauseButton.bind(this);
        this.mute = this.mute.bind(this)

    }
    secondsToMinutes(time) { 
        // debugger
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) 
    }

    componentDidUpdate(prevProps){
        // debugger
        if (prevProps.currentSong !== this.props.currentSong){
            this.setState({ currentSong: this.props.currentSong, currentlyPlaying: this.props.playing })
        } else if (prevProps.playing !== this.props.playing && (prevProps.currentSong === this.props.currentSong)){
            // debugger
            // if (this.state.currentlyPlaying !== this.props.playing){
            //     debugger
            //     this.audio.current.pause()
            //     this.setState({ currentlyPlaying: this.props.playing })
            // }else{
            //     debugger
            //     this.audio.current.play()
            //     this.setState({ currentlyPlaying: this.props.playing })
                
            // }
            this.toggle()
        }
        
    }
    
    componentDidMount(){
        this.setState({ readyToPlay: false, currentlyPlaying: false}, () => {
        this.audio.current.onloadedmetadata = () => {
            // debugger
            this.setState({ readyToPlay: true, currentlyPlaying: this.props.playing, 
                duration: this.audio.current.duration,
                currentSong: this.props.currentSong 
            }, () => this.audio.current.play())
        }})
        this.updateTime();
    }

    controlVolume(){
        this.audio.current.volume = this.volumeBar.current.value / 100
    }

    updateTime(){
    
        this.audio.current.onplaying = () => {
            this.currentTime = setInterval(() => {
                this.seekBar.current.value = this.audio.current.currentTime
                this.setState({ currentTime: this.audio.current.currentTime})
                if (this.audio.current.ended){
                    this.resetSong()
                }
                this.props.updateCurrentSongTime(this.state.currentTime / this.state.duration)
                
            }, 100);
        }

        this.audio.current.onpause = () => {
            clearInterval(this.currentTime)
            this.setState({ currentTime: this.audio.current.currentTime })
        }

        this.audio.current.onended = () => {
            clearInterval(0), 
            this.setState({ currentTime: 0 })
        }
      
    }
    changePlace(e){
        this.audio.current.currentTime = e.target.value
        this.setState({ currentTime: e.target.value})
    }

    resetSong(){
        this.setState({ currentlyPlaying: this.props.playing, })
        this.audio.current.currentTime = 0;
    }
    endSong(){
        this.audio.current.currentTime = this.audio.current.duration
        this.setState({ currentlyPlaying: this.props.playing, })
    }

    loop(){
        if (this.audio.current.loop === false){
            this.audio.current.loop = true
        }else{
            this.audio.current.loop = false
        }
    }



    toggle() {
        // debugger
        // this.props.playing
        let song = this.audio.current
        // debugger
        if (this.props.playing) {
            // status = 'pause';
            this.props.playSong()
            song.play();
        } else {
            // status = 'playing'
            this.props.pauseSong()
            song.pause();
        }
        
        this.setState({ currentlyPlaying: this.props.playing, duration: song.duration })
    }

    handlePlayPauseButton() {
        this.state.currentlyPlaying ? this.props.pauseSong() : this.props.playSong()
    }

    mute(){
        this.audio.current.volume = 0;
        this.volumeBar.current.value =0;
    }
    render(){
        const status = !this.state.currentlyPlaying ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>
        let currentSong = this.state.currentSong
        let currentTime = this.state.readyToPlay ? this.secondsToMinutes(this.state.currentTime) : 0
        
        let end = this.secondsToMinutes(this.state.duration)
        // debugger
        let audioVisualPart = this.state.readyToPlay ? (<>
            <div className="songBar-container">
            <section className="songBar-container-parts">
                <button className="songBar-control left" onClick={this.resetSong}>
                        <i className="fas fa-step-backward"></i>
                </button>

                <button className="songBar-control play pause"
                    onClick={this.handlePlayPauseButton}
                >{status}
                </button>

                <button className="songBar-control right" onClick={this.endSong}>
                        <i className="fas fa-step-forward"></i>
                </button>

                <button className="songBar-control loop" onClick={this.loop}>
                        <i className="fas fa-redo-alt"></i>
                </button>

                <div className="seek-bar-container">
                    <p className="orange">{currentTime}</p>
                    <input ref={this.seekBar} className="progress-bar" type="range" min="0" onInput={this.changePlace} max={this.state.duration} />
                    <p>{end}</p>
                </div>
                <div className="seek-bar-volume-container">
                        <button className="songBar-control" onClick={this.mute}>
                        <i className="fas fa-volume-up"></i>
                    </button>
                    <input  type="range" min="0" max="100" defaultValue="50" onChange={this.controlVolume}  ref={this.volumeBar} />
                </div>
                <div className="song-bar-info-container">
                    <img className="songBar-album-image" src={currentSong.imageUrl} />
                    <div className="songBar-album-image-info">
                        <p>{currentSong.title}</p>
                        <p>{currentSong.artist}</p>
                    </div>
                </div>
            </section>
            </div>

        </>) : null
        
            return(
                <>
                    <audio ref={this.audio} src={currentSong.songUrl} type="audio/mp3" preload="auto"/>
                    {audioVisualPart} 
               </>
            )
        }
}

export default SongBar