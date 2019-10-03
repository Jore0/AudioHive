import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {Link, Switch ,Route} from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute} from "../util/route_util";
import Modal from "./modal/modal";
import Nav from "./nav/nav"

const App = () => (
    <div>

        <Nav/>
        <Switch>
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        </Switch>
        <div className="main-nav">

        </div>
        <div className="footerWrap">
            <footer>
                <a target="_blank" href="https://github.com/Jore0/AudioHive"><img src={window.github}  /></a>
            </footer>
        </div>

    </div>
);

export default App;
