import React from "react";

import { Link, NavLink } from "react-router-dom";
import DropDownContainer from "../drop_down/drop_down_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    if (!this.props.currentUser) {
      return null;
    } else {
      const userImage = this.props.currentUser ? (
        <img
          className="small-profile-pic-circle"
          src={this.props.currentUser.profileImageUrl}
          alt=""
        />
      ) : (
        <div className="small-profile-pic-circle">
          <p> {this.props.currentUser.username[0].toUpperCase()}</p>
        </div>
      );
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
                      <a
                        href="https://www.linkedin.com/in/jose-orea/"
                        className="left-nav-button"
                      >
                        Linkedin{" "}
                      </a>
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
                  <input type="search" placeholder="Search Coming Soon" />
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
                    {userImage}
                  </Link>
                  <Link
                    to={`/users/${this.props.currentUser.id ||
                      this.props.currentUser.user.id}`}
                    className="right-nav-button"
                  >
                    {this.props.currentUser.username ||
                      this.props.currentUser.user.username}
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
