import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DeleteDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ vis: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ vis: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="dropdown">
        <button className="dropdownbtn" onClick={this.showMenu}>
          {" "}
          <i className="fas fa-ellipsis-h"></i>
        </button>
        {this.state.vis ? (
          <div className="dropdown-content">
            <Link
              to="/"
              onClick={this.props.logout}
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              Log Out
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

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
)(DeleteDropDown);
