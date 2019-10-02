import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {Link, Switch ,Route} from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute} from "../util/route_util";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <header>
            <Modal/>
            <Link to="/" className="header-link">
                <h1>AudioHive from the app.jsx</h1>
            </Link>
                <GreetingContainer />
        </header>
        <Switch>
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        </Switch>
    </div>
);

export default App;
