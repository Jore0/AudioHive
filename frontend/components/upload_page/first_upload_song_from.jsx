import React from 'react'
import SecondSongForm from './second_upload_song_form';


class FirstSongForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userId: this.props.userId,
            title: "",
            songFile: null, 
            errors: [],
            dragged: false
        }
       
        this.handleSongFile = this.handleSongFile.bind(this);
        this.dragOverHandler = this.dragOverHandler.bind(this);
        this.dragOverleave = this.dragOverleave.bind(this)
        this.dropHandler = this.dropHandler.bind(this);
    }

    handleSongFile(e){
        // debugger
        e.preventDefault()
        const songFile = e.target.files[0]
        // debugger
        if (songFile.type === "audio/mp3"){
            this.setState({
                songFile: songFile, 
                title: this.titleize(songFile.name.split(".")[0].split('-')),
                errors: []
            })
        }else {
            this.setState({
                errors: ['Please upload an audio file']
            })
        }
    }
    titleize(arr) {
        let titleized;
        const titelizedArray = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        titleized = titelizedArray.join(' ');
        return titleized
    }

    dragOverHandler(e) {
        e.preventDefault();
        // debugger
        this.setState({ dragged: true})
    }
    dragOverleave(e) {
        e.preventDefault();
        // debugger  
        this.setState({ dragged: false})
    }

    renderErrors() {
        return (
            <ul>
                {this.state.errors.map((error, i) => {
                    return <li className="errors" key={i}>{error}</li>
                })}
            </ul>
        )
    }

    dropHandler(e){
        e.preventDefault()
        const songFile = e.dataTransfer.files[0]
        // debugger
        if (songFile.type === "audio/mp3"){
            this.setState({
                songFile: songFile, 
                title: this.titleize(songFile.name.split(".")[0].split('-')),
                errors: []
            })
            // debugger

        }else {
            this.setState({
                errors: ['Please upload an audio file']
            })
        }
    }

    render(){
        if (this.state.songFile){
            // debugger
            return <SecondSongForm title={this.state.title} songFile={this.state.songFile} userId={this.state.userId} uploadSong={this.props.uploadSong}/>
        } else {
            return(
                <div className="upload-form-container" onDrop={this.dropHandler} onDragOver={this.dragOverHandler} >
                    <h1>Drag and drop your tracks & albums here</h1>
                    <form className="upload-form-content">
                        <label className="custom-file-upload">
                            or choose files to upload
                            <input type="file" onChange={this.handleSongFile}/>
                        </label>
                    </form>
                    <p>
                        Provide FLAC, WAV, ALAC or AIFF for best audio quality. <a href="https://help.soundcloud.com/hc/en-us/articles/115003452847-Uploading-requirements#typeOfFile" target="_blank">Learn more about high quality audio (HQ).</a>
                    </p>

                    <div className={`drag-over-modal-background ${this.state.dragged ? "show-drag-over" : ""}`} onDragLeave={this.dragOverleave}>
                        <div className={`drag-over-modal-child ${this.state.dragged ? "show-drag-over" : ""}`} >
                            <div className={`drag-over-ged-upload ${this.state.dragged ? "show-drag-over" : ""}`} >
                                Drop your files here
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default FirstSongForm;