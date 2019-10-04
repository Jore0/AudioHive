import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import Modal from "../modal/modal";
import { Link, Switch, Route } from "react-router-dom";


const Nav = () => (

    <nav className="top-nav">
        <img src={window.mini} className="mini-logo" />
        <GreetingContainer />
        <Modal/>
    </nav>

)

export default Nav;