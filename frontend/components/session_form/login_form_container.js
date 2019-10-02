import React from "react"
import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { login } from '../../actions/session_action'
import { openModal, closeModal } from '../../actions/modal_actions';
import {Link} from "react-router-dom";


const msp = (state, ownProps) => ({
    email: state.session.email,
    userEmail: state.session.currentUserEmail,
    errors: state.errors.session,
    formType: "Login", 
    // navLink: <Link to="/signup"> Don't have an account</Link>
})
const mdp = dispatch => ({
    login: (user)=> dispatch(login(user)),
    processForm: (user) => dispatch(login(user)),
    otherform:(
        <button onClick={() => dispatch(openModal())}>
            Signup
        </button>
    ), 
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm)