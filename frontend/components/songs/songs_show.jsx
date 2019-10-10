import React from "react";
import WaveForm from "../waveform/waveform"
class SongShowPage extends React.Component {
    
    constructor(props){
        super(props)
        debugger 
        this.state ={
           
        }

    }

    componentDidMount(){
        debugger
        this.props.fetchSong(this.props.match.params.songId);
        
    }
    

    render(){
        // debugger 
        let waveform;
        if (this.props.song){
            waveform = <WaveForm  song={this.props.song} fetchSong={this.props.fetchSong}/>

        }
        return (

            <div className="song-show-page">
                
                <div className="hero-song-display">
                {waveform}
                <img src={this.props.song ? this.props.song.imageUrl : ""} className="large-ablum-cover"/>
                </div>
            </div>
        )
    }


}


export default SongShowPage