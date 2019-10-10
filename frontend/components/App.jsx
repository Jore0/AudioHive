import React from "react";
import LoginNavContainer from "./greeting/login_nav_container";
import NavBarContainer from "./greeting/nav_bar_container";
import {Link, Switch ,Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute} from "../util/route_util";
import Modal from "./modal/modal";
import DicoverPageContainer from "./discover_page/discover_page_container";
import UploadLoadPageContainer from "./upload_page/upload_page_container"
import SongBar from "./songbar/songbar_container";
import SongShowPageContainer from "./songs/songs_show_container";
import {Footer }from "./footer/footer"
const App = () => ( 
    <>
        <LoginNavContainer/>
        <NavBarContainer/>
        <Modal/> 
        
        <Switch>
        <ProtectedRoute exact path="/" component={DicoverPageContainer}/>
        <ProtectedRoute path="/upload" component={UploadLoadPageContainer}/> 

        <Route path="/songs/:songId" component={SongShowPageContainer}/>
        <Route path="/songs/:songId/newSong" component={SongShowPageContainer}/>
        </Switch>
        <SongBar/>
        <Footer/>
  
    </>
);

export default App;
