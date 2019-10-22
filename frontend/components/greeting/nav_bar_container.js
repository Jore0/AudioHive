import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout, login } from "../../actions/session_action";

import { openModal } from "../../actions/modal_actions";

const msp = state => {
  // debugger;
  return { currentUser: state.entities.users[state.session.id] };
};
const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  msp,
  mdp
)(NavBar);
