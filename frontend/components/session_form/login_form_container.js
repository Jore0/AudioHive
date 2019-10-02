import React from "react"
import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { login } from '../../actions/session_action'
import {Link} from "react-router-dom";


const msp = (state, ownProps) => ({
    // debugger
    errors: state.errors.session,
    formType: "Login", 
    navLink: <Link to="/signup"> Don't have an account</Link>
})
const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)