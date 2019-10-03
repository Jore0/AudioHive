import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import LoginGreeting from "./login_greeting"
const Greeting = (props) => {
    // debugger
    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <Link to="/login">Login</Link> */}
            <button className="clear-button"  onClick={() => props.openModal("initial")}>Sign in</button>
            <button className="orange-button" onClick={() => props.openModal("initial")}>Create Account</button>
            <button className="clear-button" onClick={() => props.login({ email: "test@gmail.com", password: "password" })}>Demo Login</button>
            {/* <Link to="/signup">Sign up!</Link> */}
        </nav>
    );

    const personalGreeting = () => (
        // <nav className="login-signup">
        //     <h2 className="header-name">Welcome, {props.currentUser.username}!</h2>
        //     <button className="orange-button" onClick={props.logout}>Log Out</button>
        // </nav>
        <LoginGreeting/>
    );
    return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
