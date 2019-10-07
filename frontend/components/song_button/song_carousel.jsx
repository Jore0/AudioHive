import React from "react";
import scrollTo from "./scrollToAnimate"

class SongCarousel extends React.Component {
    constructor(props){
    super(props)

    this.state={
        numOfSBToScroll: 5,
        allTheWayLeft: true,
        allTheWayRight: true
    }
        this.carouselViewport = React.createRef();
        this.onScroll = this.onScroll.bind(this)
        this.handleLeftNav = this.handleLeftNav.bind(this);
        this.handleRightNav = this.handleRightNav.bind(this);
    }

    onScroll() {
        this.checkIfAllTheWayOver();
    }

    componentDidMount(){
        window.addEventListener("resize", this.onResize);
        this.checkIfAllTheWayOver();
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.onResize)
    }

    checkIfAllTheWayOver() {
        let allTheWayLeft = false;
        if (this.carouselViewport.current.scrollLeft === 0) {
            allTheWayLeft = true;
            this.setState({ allTheWayLeft})
        } else if (this.carouselViewport.current.scrollRight === 0){
            allTheWayRight = true;
            this.setState({ allTheWayRight })
        }
    }

    handleLeftNav(e){
        const numOfSBToScroll = this.state.numOfSBToScroll;
        const widthOfSlide = 150;
        const newPos = this.carouselViewport.current.scrollLeft - (numOfSBToScroll * widthOfSlide)
        const timeToMoveOneSB = 200;
        const totalTimeToMove = Math.min((numOfSBToScroll * timeToMoveOneSB), 400)
        scrollTo({
            element: this.carouselViewport,
            to: newPos,
            duration: totalTimeToMove,
            scrollDirection: 'scrollLeft', 
            callback: this.checkIfAllTheWayOver,
            context: this
        })
  
    }
    handleRightNav(e){
        const numOfSBToScroll = this.state.numOfSBToScroll;
        const widthOfSlide = 150;
        const newPos = this.carouselViewport.current.scrollLeft + (numOfSBToScroll * widthOfSlide) 
        const timeToMoveOneSB = 200;
        const totalTimeToMove = Math.min( (numOfSBToScroll * timeToMoveOneSB), 400 )
        scrollTo({
            element: this.carouselViewport, 
            to: newPos, 
            duration: totalTimeToMove, 
            scrollDirection: 'scrollLeft', 
            callback: this.checkIfAllTheWayOver,
            context: this

        })
    }

    render(){  
        return (
        <div className="songs-container">

                <button 
                    onClick={this.handleLeftNav} 
                    className={this.state.allTheWayRight ? "carousel-nav left-arrow" : "carousel-nav-disabled"}>
                    <i className="fas fa-chevron-left"></i>
                </button>

                <div 
                    className="carousel-viewport" 
                    ref={this.carouselViewport}
                    onScroll={this.onScroll}
                    >
                    {this.props.songs}
                </div>

                <button 
                    onClick={this.handleRightNav} 
                    className={this.state.allTheWayLeft ? "carousel-nav right-arrow" : "carousel-nav-disabled"}> 
                    <i className="fas fa-chevron-right"></i>
                </button>

        </div>
        )
    }
}
export default SongCarousel;
