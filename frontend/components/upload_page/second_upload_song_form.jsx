import React from 'react'
import { withRouter } from 'react-router-dom';


class SecondSongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId:  this.props.userId,
            title:  this.props.title,
            artist: "",
            genre:  "None",
            description: "",
            release_date:"", 
            photoFile: null, 
            songFile:  this.props.songFile,
            dragged: false
        }
        this.dragOverHandler = this.dragOverHandler.bind(this);
        this.dragOverleave = this.dragOverleave.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageFile = this.handleImageFile.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        // debugger
        formData.append('song[song_url]', this.state.songFile)
        formData.append('song[description]', this.state.description)
        formData.append('song[release_date]', this.state.release_date)
        formData.append('song[genre]', this.state.genre)
        formData.append('song[artist]', this.state.artist)
        formData.append('song[title]', this.state.title)
        formData.append('song[user_id]', this.state.userId)
        if (this.state.photoFile){
            formData.append('song[album_cover]', this.state.photoFile)
            this.props.uploadSong(formData).then(songs => {
                return this.props.history.push("/newSong")
            })
        } else {
            this.setState({
                errors: ['Please upload an image file']
            })
        }
            // .then(this.props.closeModal)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
    handleImageFile(e){
        // debugger
        e.preventDefault()
        const file = e.target.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend=()=>{
            this.setState({photoFile: file,errors: [], photoUrl: fileReader.result})
        }
        // debugger
        if(file){
            fileReader.readAsDataURL(file);
        }else {
            this.setState({
                errors: ['Please upload an image file']
            })
        }
    }

    dragOverHandler(e) {
        e.preventDefault();
        // debugger
        this.setState({ dragged: true })
    }
    dragOverleave(e) {
        e.preventDefault();
        // debugger  
        this.setState({ dragged: false })
    }

    dropHandler(e) {
        // debugger
        e.preventDefault()
        const file = e.target.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, errors: [], photoUrl: fileReader.result })
        }
        // debugger
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({
                errors: ['Please upload an image file']
            })
        }
    }
    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null
        return (
            <div className="upload-form-container" onDragOver={this.dragOverHandler} onDrop={this.dropHandler}>
                <form className="second-upload-form-content" onSubmit={this.handleSubmit}>
                    <div className="left-form">
                            
                            {preview}
                            <i className="fas fa-camera"></i>
                        <label className="custom-file-upload">
                            Upload image

                            <input type="file" onChange={this.handleImageFile} />
                        </label>
                        
                    </div>
                    <div className="right-form">
                        <label>Title<span className="errors">*</span></label>
                        <input type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title"/>
                    
                        <label>Artist<span className="errors">*</span></label>
                        <input type="text" value={this.state.artist} onChange={this.update("artist")} placeholder="Artist Name"/>
                    

                    <label>Genre <span className="errors">*</span></label>
                    <select value={this.state.genre} onChange={this.update("genre")}>
                        <option value="Alternative Rock">Alternative Rock</option>
                        <option value="Classis Rock">Classic Rock</option>
                        <option value="Dance EDM">Dance & EDM</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="House">House</option>
                        <option value="Indie">Indie</option>
                        <option value="Latin">Latin</option>
                        <option value="Metal">Metal</option>
                        <option value="Pop">Pop</option>
                        <option value="R n B">R&B & Soul</option>
                        <option value="Reggae">Reggae</option>
                        <option value="Reggaeton">Reggaeton</option>
                        <option value="Rock">Rock</option>
                        <option value="Trap">Trap</option>
                    </select>
                    
                    <label>Description</label>
                        <textarea onChange={this.update("description")} placeholder="Describe your track"></textarea>
                    <input className="custom-file-upload"type="submit" value="Save"/>
                    </div>
                </form>
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
export default withRouter(SecondSongForm)