import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import LoginGreeting from "./login_greeting"
const Greeting = (props) => {
    // debugger
    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="clear-button"  onClick={() => props.openModal("initial")}>Sign in</button>
            <button className="orange-button" onClick={() => props.openModal("initial")}>Create Account</button>
            <button className="clear-button" onClick={() => props.login({ email: "test@gmail.com", password: "password" })}>Demo Login</button>
        </nav>
    );

    const personalGreeting = () => (
        <LoginGreeting/>
    );
    return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
