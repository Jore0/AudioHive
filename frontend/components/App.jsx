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
        <header>
            <Nav/>
        </header>
        <Switch>
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        </Switch>

    </div>
);

export default App;
