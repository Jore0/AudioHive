import React from 'react';
import UserNav from "./nav_bar";
import { connect } from "react-redux";

class LoginNav extends React.Component {
    constructor(props){
        super(props)
    }
    render (){
        if (this.props.currentUser){
            return null
        } else {
        return (
        <div className="hero-image">
            <nav className="login-signup">
                <img src={window.mini} className="mini-logo" />
                <div className="buttons">
                    <button className="clear-button" onClick={() => this.props.openModal("initial")}>Sign in</button>
                    <button className="orange-button" onClick={() => this.props.openModal("initial")}>Create Account</button>
                    <button className="clear-button" onClick={() => this.props.login({ email: "test@gmail.com", password: "password" })}>Demo Login</button>
                </div>
            </nav>
        </div>
        )
        }
    }
};
// return props.currentUser ? personalGreeting() : sessionLinks();



// connect(msp, null)(NavBar)
export default LoginNav;
        // const personalGreeting = () => (
        //     <UserNav currentUser={props.currentUser}/>
        // );
