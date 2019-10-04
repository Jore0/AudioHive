import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {Link, Switch ,Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute} from "../util/route_util";
import Modal from "./modal/modal";

const App = () => (
    <>
        <Switch>
            <Route to="/" component={GreetingContainer}/>
        </Switch>
        
        <Modal/>
        
        <div className="footerWrap">
            <footer>
                <a target="_blank" href="https://github.com/Jore0/AudioHive"><img src={window.github}  /></a>
            </footer>
        </div>
    </>
);

export default App;
