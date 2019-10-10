import React from "react";

class SongBar extends React.Component {
    constructor(props){
        super(props)
        debugger
        this.state = {
            duration: 0,
            currentSong: "",
            currentlyPlaying: this.props.playing,
            volume: 0.5,
            readyToPlay: false,

        }
      
        this.audio = React.createRef();
        this.volumeBar = React.createRef();
        this.seekBar = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.changePlace = this.changePlace.bind(this)
        this.resetSong = this.resetSong.bind(this)
        this.controlVolume = this.controlVolume.bind(this);
        this.endSong = this.endSong.bind(this)
        this.loop = this.loop.bind(this)
    }
    secondsToMinutes(time) { 
        // debugger
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) 
    }

    componentDidUpdate(prevProps){
      
        if (prevProps.currentSong !== this.props.currentSong){
            this.setState({ currentSong: this.props.currentSong, currentlyPlaying: this.props.playing }, ()=> {
                // debugger
                this.audio.current.onloadedmetadata = () => {
                    // debugger
                    this.setState({ readyToPlay: true, currentlyPlaying: this.props.playing, duration: this.audio.current.duration}, ()=> this.audio.current.play())
                }
            })
        } else if (this.props.playing === false  && (prevProps.currentSong === this.state.currentSong)){
            debugger
            this.audio.current.pause();
            this.setState({ currentlyPlaying: this.props.playing})
        }
        
    }
    
    componentDidMount(){
        this.setState({ readyToPlay: false, currentlyPlaying: false})
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
            
            }, 1000);
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
        debugger
        // this.props.playing
        let song = this.audio.current
        // debugger
        if (!this.props.playing) {
            // status = 'pause';
            this.props.playSong()
            song.play();
        } else {
            // status = 'playing'
            this.props.pauseSong()
            song.pause();
        }
        
        this.setState({ currentlyPlaying: !this.props.playing, duration: song.duration })
    }

    
    render(){
        const status = !this.state.currentlyPlaying ? window.play : window.pause
        let currentSong = this.state.currentSong
        let currentTime = this.state.readyToPlay ? this.secondsToMinutes(this.state.currentTime) : 0
        
        let end = this.secondsToMinutes(this.state.duration)

        let audioVisualPart = this.state.readyToPlay ? (<>
            <div className="songBar-container">
            <section className="songBar-container-parts">
                <button className="songBar-control left" onClick={this.resetSong}>
                    <img className="songBar-image" src={window.left} />
                </button>

                <button className="songBar-control play pause"
                    onClick={this.toggle}
                ><img className="songBar-image" src={status} alt="" />
                </button>

                <button className="songBar-control right" onClick={this.endSong}>
                    <img className="songBar-image" src={window.right} />
                </button>
                <button className="songBar-control loop" onClick={this.loop}>
                    <img className="songBar-image" src={window.in} alt=""/>
                </button>

                <div className="seek-bar-container">
                    <p>{currentTime}</p>
                    <input ref={this.seekBar} type="range" min="0" onInput={this.changePlace} max={this.state.duration} />
                    <p>{end}</p>
                </div>
                <div className="seek-bar-volume-container">
                    <i className="fas fa-volume-up"></i>
                    <input type="range" min="0" max="100" defaultValue="50" onChange={this.controlVolume} ref={this.volumeBar} />
                </div>
                <div className="song-bar-info-container">
                    <img className="songBar-album-image" src={currentSong.imageUrl} />
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