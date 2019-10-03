import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import Modal from "../modal/modal";
import { Link, Switch, Route } from "react-router-dom";
import DropDownContainer from '../drop_down/drop_down_container'

const LoginGreeting = () => (

    <nav className="login-nav">
        <header className="header-inner">
            <div className="header-left">
                <div className="headerlogo-left"><Link to="/"><img src={window.sicon} className="icon-logo" /></Link></div>
                <div className="header-left-items">
                    <ul>
                        <li><Link to="/" className="nav-button">Home </Link></li>
                        <li><Link to="/" className="nav-button">Stream </Link></li>
                        <li><Link to="/" className="nav-button">Playlist </Link></li>

                    </ul>
                </div>
            </div>
            <div className="header-middle">
                <div className="header-search">
                    <form className="header-search-form">
                        <input type="search" placeholder="search"/>
                        <button className="search-button"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="header-right">
                <a href="">Upload</a>
                <div className="header-right-items">
                    <a href=""><i className="far fa-user"></i></a>
                    <a href=""><i className="fas fa-bell"></i></a>
                    <a href=""><i className="fas fa-envelope"></i></a>
                </div>
                <DropDownContainer/>
            </div>
        </header>
    </nav>

)

export default LoginGreeting;