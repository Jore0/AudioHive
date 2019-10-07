import React from "react";

class SongButton extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            playButton: false,
            songTitle: this.props.song.imageUrl,
            playStatus: 'play'
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
        let status = this.state.playStatus;
        let song = document.getElementById(this.props.song.title)
        // debugger
        if(status === 'play'){
            status = 'pause';
            song.play();
        }else {
            status = 'play'
            song.pause();
        }
        this.setState({playStatus:  status})
    }

    render() {
        // debugger
        let togglebutton;
        const albumCover = {
            backgroundImage: `url(${this.props.song.imageUrl})`
        }
        if (this.state.playButton){
            togglebutton = <img onClick={this.toggle} id="playButton" src={this.state.playStatus === "play" ? window.hiveButton : window.hivePause} alt="play" className="playButton"/>
        }
    
        return (
        <>
            <div className="entire-song-button"> 
            <div className="song-button-container"
                style={albumCover}  
                onMouseEnter={this.showPlayButton}
                onMouseLeave={this.hidePlayButton}
                onClick={this.toggle}
                >
                <audio id={this.props.song.title} src={this.props.song.songUrl} type="audio/mp3" preload="auto"/>
                {togglebutton}
            </div>
            <h1 className="song-detail">{this.props.song.title} - {this.props.song.artist} </h1>
                </div>
            </>
        )
    }
}

export default SongButton