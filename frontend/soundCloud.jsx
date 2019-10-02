import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
//testing 
import {login} from "./util/session_util_api_util"
import {logout} from "./util/session_util_api_util"
import {signup} from "./util/session_util_api_util"

document.addEventListener("DOMContentLoaded", () => {
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    const store = configureStore();
    window.store = store;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to AudioHive</h1>, root);
});