import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {Switch ,Route} from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
const App = () => (
    <div>
        <header>
            <h1>AudioHive from the app.jsx</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;
