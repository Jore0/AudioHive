import React from "react"
import { connect } from 'react-redux';
import InitialSessionForm from "./initial_session_form";
import { closeModal } from '../../actions/modal_actions';
import { nextForm } from "../../actions/initial_session_form_actions";

const msp = (state, ownProps) => ({
    email: state.session.email,
    errors: state.errors.session,
    formType: "Initial",
    // navLink: <Link to="/signup"> Don't have an account</Link>
})
const mdp = dispatch => ({
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(nextForm(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(InitialSessionForm)