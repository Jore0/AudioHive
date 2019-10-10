import React from "react";
class WaveForm extends React.Component {

    constructor(props) {
        super(props)
        debugger
        this.state = {
            readyToPlay: false
        }
        this.waveform = React.createRef()
        this.wavesurfer = null
        this.showWaveSurfer = this.showWaveSurfer.bind(this)
        this.StartPlay = this.StartPlay.bind(this)
    }
    
    componentDidMount(){
        this.showWaveSurfer()
    }

    componentDidUpdate(){

    }

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

export default WaveForm