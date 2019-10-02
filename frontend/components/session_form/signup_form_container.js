import React from "react"
import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { signup } from '../../actions/session_action'
import { Link } from 'react-router-dom';


const msp = (state, ownProps) => ({
    // debugger
    errors: state.errors.session,
    userEmail: state.session.currentUserEmail,
    formType: "Create Account",
    navLink: <Link to="/login">Are you trying to sign in? </Link>
})
const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)