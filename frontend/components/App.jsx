import React from "react";
import LoginNav from "./greeting/login_nav_container";
import NavBar from "./greeting/nav_bar";
import {Link, Switch ,Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute} from "../util/route_util";
import Modal from "./modal/modal";
import DicoverPageContainer from "./discover_page/discover_page_container";

const App = () => (
    <>
        <Switch>
            <Route exact path="/" component={LoginNav}/>
            {/* <Route path="/" component={NavBar}/> */}
            <Route to="/discover" component={DicoverPageContainer}/> 
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
