import React from "react";
import { connect } from 'react-redux';

class WaveForm extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = {
            readyToPlay: false
        }
        this.waveform = React.createRef()
        this.wavesurfer = null
        this.showWaveSurfer = this.showWaveSurfer.bind(this)
        this.StartPlay = this.StartPlay.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchSong(this.props.song.id)
        this.showWaveSurfer()
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

        this.wavesurfer.on('ready', function () {
            this.setState({readyToPlay: true })
        });
    }

    render(){



         return (<>
             <div className="wave-form-container">
                <div className="wave" ref={this.waveform} ></div>
                </div>
             {/* <button onClick={this.StartPlay}>
                 Play
             </button> */}
        </>
        )
    }

}

// export default WaveForm


const msp = (state, ownProps) => {
    // debugger
    return ({
        currentUserId: state.session.id,
        currentSong: state.entities.songs[state.ui.currentSong.id],
        curentTime: state.ui.currentSong.currentTime, 

    })
}

const mdp = dispatch => ({
    // fetchSong: (id) => dispatch(fetchSong(id)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
})

export default connect(msp, mdp)(WaveForm)