import React from "react";

import { Link, NavLink } from "react-router-dom";
import DropDownContainer from "../drop_down/drop_down_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    } else {
      return (
        <div className="logged-nav-container">
          <nav className="login-nav">
            <nav className="inner-login-nav">
              <div className="header-left">
                <Link className="header-logo-left" to="/">
                  <img src={window.icon} className="icon-logo" />
                </Link>
                <div className="header-left-items">
                  <ul>
                    <li>
                      <NavLink to="/discover" className="left-nav-button">
                        Home{" "}
                      </NavLink>
                    </li>
                    <li>
                      <Link to="/discover" className="left-nav-button">
                        Stream{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/discover" className="left-nav-button">
                        Playlist{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-middle">
                <form className="header-search-form">
                  <input type="search" placeholder="search" />
                  <button className="search-button">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>

              <div className="header-right">
                <NavLink to="/upload" className="left-nav-button">
                  Upload
                </NavLink>
                <div className="header-right-items">
                  <Link
                    to={`/users/${this.props.currentUser.id ||
                      this.props.currentUser.user.id}`}
                    className="right-nav-button"
                  >
                    {this.props.currentUser.username ||
                      this.props.currentUser.user.username}
                  </Link>
                  <Link to="/" className="right-nav-button">
                    <i className="fas fa-bell"></i>
                  </Link>
                  <Link to="/" className="right-nav-button">
                    <i className="fas fa-envelope"></i>
                  </Link>
                </div>
                <DropDownContainer />
              </div>
            </nav>
          </nav>
        </div>
      );
    }
  }
}

export default NavBar;
