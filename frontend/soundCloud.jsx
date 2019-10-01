import React from "react";
import ReactDOM from "react-dom";
import {login} from "./util/session_util_api_util"
import {logout} from "./util/session_util_api_util"
import {signup} from "./util/session_util_api_util"

document.addEventListener("DOMContentLoaded", () => {
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to SoundCloud</h1>, root);
});