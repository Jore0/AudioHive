import React from "react";

import { Link, Switch, Route } from "react-router-dom";
import DropDownContainer from '../drop_down/drop_down_container'

class userNav extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        debugger
    return (
        <nav className="login-nav">
        <nav className="inner-login-nav">
            <div className="header-left">
                <Link className="header-logo-left" to="/"><img src={window.icon} className="icon-logo" /></Link>
                <div className="header-left-items">
                    <ul>
                        <li><Link to="/" className="left-nav-button">Home </Link></li>
                        <li><Link to="/" className="left-nav-button">Stream </Link></li>
                        <li><Link to="/" className="left-nav-button">Playlist </Link></li>
                    </ul>
                </div>
            </div>
            <div className="header-middle">
            <form className="header-search-form">
                <input type="search" placeholder="search"/>
                <button className="search-button"><i className="fas fa-search"></i></button>
            </form>
            </div>

            <div className="header-right">
                <a href="">Upload</a>
                <div className="header-right-items">
                    <Link to="/" className="right-nav-button">{this.props.currentUser.username}</Link>
                    <Link to="/" className="right-nav-button"><i className="fas fa-bell"></i></Link>
                    <Link to="/" className="right-nav-button"><i className="fas fa-envelope"></i></Link>
                </div>
                <DropDownContainer/>
            </div>
        </nav>
    </nav>
    )
    }
}

export default userNav ;