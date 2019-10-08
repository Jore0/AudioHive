import React from "react";
import LoginNavContainer from "./greeting/login_nav_container";
import NavBarContainer from "./greeting/nav_bar_container";
import {Link, Switch ,Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute} from "../util/route_util";
import Modal from "./modal/modal";
import DicoverPageContainer from "./discover_page/discover_page_container";
import UploadLoadPageContainer from "./upload_page/upload_page_container"
import SongBar from "./songbar/songbar_container";
const App = () => ( 
    <>
        <LoginNavContainer/>
        <NavBarContainer/>
        <Modal/> 
        
        <Switch>
        <ProtectedRoute path="/discover" component={DicoverPageContainer}/>
        <ProtectedRoute path="/upload" component={UploadLoadPageContainer}/> 
        <ProtectedRoute path="/" component={UploadLoadPageContainer}/> 
        </Switch>
        <SongBar/>
        {/* <div className="footerWrap">
            <footer>
                <a target="_blank" href="https://github.com/Jore0/AudioHive"><img src={window.github}  /></a>
            </footer>
        </div> */}
    </>
);

export default App;
