import React from "react"
import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { signup, } from '../../actions/session_action'
import { Link } from 'react-router-dom';
import { openModal, closeModal} from '../../actions/modal_actions';


const msp = (state, ownProps) => ({
    // debugger
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    userEmail: state.session.currentUserEmail,
    formType: "Create Account",
})
const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    processForm: (user) => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)