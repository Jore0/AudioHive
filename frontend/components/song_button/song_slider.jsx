import React from "react";

class SongSlider extends React.Component {
    constructor(props){
    super(props)
    this.state={
        currentButton: "right",
        length: this.props.songs.length
    }
    this.toggleLeftRight = this.toggleLeftRight.bind(this);
    }

    toggleLeftRight(){
        if (this.state.currentButton === "right"){
            this.setState({currentButton: "left"})
        } else if (this.state.currentButton === "left"){
            this.setState({ currentButton: "right"})
        }
    }



    render(){
        // debugger
        return (
        <div className="songs-container">
            <button className={`${this.state.currentButton}-arrow`}><i className="fas fa-chevron-left"></i></button>
                <div className={`songs-scroll`}>  
                    {/* ${this.state.currentButton === "left" ? "songs-scroll-slide" : ""}` */}
                    <div className="songs-container-inner">
                        {this.props.songs}
                    </div>
                


            </div>
            <button className={`${this.state.currentButton}-arrow`}><i className="fas fa-chevron-right"></i></button>
        </div>
        )
    }
}
export default SongSlider;
