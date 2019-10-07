import React from 'react'
import {NavLink} from 'react-router-dom';
import FirstSongForm from "./first_upload_song_from";

class UploadPage extends React.Component {
    constructor(props){
        super(props)

    }

    dragOverHandler(e){
        e.preventDefault();
    }


    render(){
        return(
            <div className="upload-page" onDragOver={this.dragOverHandler}>
                <nav className="upload-page-nav">
                    <nav className="upload-page-links">
                        <NavLink className="upload-page-link" to="/upload">Upload</NavLink>
                        <NavLink className="upload-page-link" to="/discover">Home</NavLink>
                    </nav>
                    <a className="upload-page-link" to="/upload">For Creators on SoundCloud</a>
                </nav>
                <FirstSongForm userId={this.props.userId} uploadSong={this.props.uploadSong} history={this.props.history} openModal={this.props.openModal}/>
            </div>

        )
    }
}
export default UploadPage