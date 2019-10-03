import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Greeting = (props) => {
    // debugger
    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <Link to="/login">Login</Link> */}
            <button className="clear-button"  onClick={() => props.openModal("initial")}>Sign in</button>
            <button className="orange-button" onClick={() => props.openModal("initial")}>Create Account</button>
            <button className="clear-button" onClick={() => props.login({ username: "jmoney", password: "password" })}>Demo Login</button>
            {/* <Link to="/signup">Sign up!</Link> */}
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
