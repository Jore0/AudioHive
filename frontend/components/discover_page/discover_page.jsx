import React from "react"; 
import SongButton from "../song_button/song_button"
import SongSlider from "../song_button/song_slider"
class DiscoverPage extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSongs();
    }

    render(){
        // debugger
        const songs = this.props.songs.map(song => {
            return <SongButton key={song.id} song={song}/>
        })
        return(
        
        <div className="discover-page-container">
            <h1 className="song-list-header">New Music Now</h1>
            <p className="song-list-subheader">The latest hits, updated all the time</p>
            <SongSlider songs={songs}/>
        </div>
        ) 
    }
}

export default DiscoverPage