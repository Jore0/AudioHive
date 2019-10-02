import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    // debugger
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className="header-group">
            <h2 className="header-name">Welcome, {props.currentUser.username}!</h2>
            <button className="header-logout-button" onClick={props.logout}>Log Out</button>
        </div>
    );

    return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
