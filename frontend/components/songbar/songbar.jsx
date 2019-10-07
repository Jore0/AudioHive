import React from "react";


class SongBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSong = this.props.currentSong,
            currentlyPlaying: false
        }
    }

    render(){
        const status = this.state.currentlyPlaying ? window.play : window.pause
        return(
            <div className="songBar-container">
                <section className="songBar-container-parts">
                    <button className="songBar-control left">{window.left}</button>
                    <button className="songBar-control play pause">{status}</button>
                    <button className="songBar-control right">{window.right}</button>
                    <div className="seek-bar-container">

                    </div>
                </section>
            </div>
        )
    }

}

export default SongBar