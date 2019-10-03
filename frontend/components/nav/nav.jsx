import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import Modal from "../modal/modal";
import { Link, Switch, Route } from "react-router-dom";


const Nav = () => (

    <nav className = "main-nav">

    
        <nav className="top-nav">
                <Link to="/" className="header-link">
                    <img src={window.mini} className="mini-logo" />
                </Link>
                <GreetingContainer />
            
            <Modal />
        </nav>
    </nav>

)

export default Nav;