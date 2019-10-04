import React from 'react';
import UserNav from "./user_nav";
import { connect } from "react-redux";
const Greeting = (props) => {
    // debugger
    const sessionLinks = () => (
        <nav className="login-signup">
            <img src={window.mini} className="mini-logo" />
            <div className="buttons">
            <button className="clear-button"  onClick={() => props.openModal("initial")}>Sign in</button>
            <button className="orange-button" onClick={() => props.openModal("initial")}>Create Account</button>
            <button className="clear-button" onClick={() => props.login({ email: "test@gmail.com", password: "password" })}>Demo Login</button>
            </div>
        </nav>
    );

    const personalGreeting = () => (
        <UserNav currentUser={props.currentUser}/>
    );
    
    return props.currentUser ? personalGreeting() : sessionLinks();
};


// connect(msp, null)(UserNav)
export default Greeting;
