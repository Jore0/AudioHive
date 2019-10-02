import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import Modal from "../modal/modal";
import { Link, Switch, Route } from "react-router-dom";

const Nav = () => (

    <nav className = "main-nav">
        <Modal />
        <Link to="/" className="header-link">
            <h1>AudioHive from the app.jsx</h1>
        </Link>
        <GreetingContainer />
    </nav>

)

export default Nav;