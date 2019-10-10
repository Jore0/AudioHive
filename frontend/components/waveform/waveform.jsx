import React from "react";
import { connect } from 'react-redux';

class WaveForm extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = {
            readyToPlay: false, 
            duration: this.props.song.duration || 0
        }
        this.waveform = React.createRef()
        this.seekBar = React.createRef()
        this.wavesurfer = null
        // this.updateTime = this.updateTime.bind(this)
        this.showWaveSurfer = this.showWaveSurfer.bind(this)
        this.StartPlay = this.StartPlay.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchSong(this.props.song.id)
        this.showWaveSurfer();
        // this.updateTime();
    }

    // componentDidUpdate(){
    //     if (this.props.song.title === this.props.currentSong.title && this.state.readyToPlay){
    //         debugger
    //         this.wavesurfer.seekTo(this.props.currentTime)
    //     }else {
    //         debugger
    //         this.wavesurfer.seekTo(0);
    //     }
    // }

    StartPlay(){
        this.wavesurfer.playPause() 
    }
    showWaveSurfer() {
        // debugger
        this.wavesurfer = WaveSurfer.create({
            container: this.waveform.current,
                waveColor: '#cdcfd1',
                progressColor: '#f50',
                cursorColor: 'transparent',
                barGraph: 10,
                barWidth: 2,
                
        })
        this.wavesurfer.load(this.props.song.songUrl);

        this.wavesurfer.on('ready', ()  => {
            this.setState({readyToPlay: true })
        });
    }
    secondsToMinutes(time) {
        // debugger
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }

    render(){
       let maxy;
       let currentTime;
       let totalLength;
        if (this.wavesurfer){
            debugger 
            this.wavesurfer.seekTo(this.props.currentTime)
            currentTime = this.secondsToMinutes(this.props.currentTime * this.wavesurfer.getDuration())
            maxy = this.wavesurfer.getDuration()
            totalLength = this.secondsToMinutes(this.wavesurfer.getDuration())
            this.seekBar.current.value = this.props.currentTime * this.wavesurfer.getDuration();
        }   
        
        return (<>
            <input className="blackSeekbar" ref={this.seekBar} type="range" min="0" max={maxy}/>
            <div className="wave-form-container">

            <div className="wave-form-times">
                    <p className="wave-form-orange">{currentTime}</p>
                    <p className="wave-form-transparent">{totalLength}</p>
            </div>
            <div className="wave" ref={this.waveform}></div>

            </div>
                </>
                )
            }

}

const msp = (state, ownProps) => {
    // debugger
    return ({
        currentUserId: state.session.id,
        currentSong: state.entities.songs[state.ui.currentSong.id],
        currentTime: state.ui.currentSong.currentTime, 

    })
}

const mdp = dispatch => ({
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
})

export default connect(msp, mdp)(WaveForm)