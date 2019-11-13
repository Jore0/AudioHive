import { connect } from "react-redux";
import { logout } from "../../actions/session_action";
import DropDown from "./drop_down";

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    showMenu: false
  };
};
const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  msp,
  mdp
)(DropDown);
