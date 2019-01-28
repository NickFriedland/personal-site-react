import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'light gray'
    };

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink
          className="navbar-brand"
          exact
          to="/"
          activeStyle={activeStyle}
        >
          <img src={logo} alt="logo" style={{ width: '40px' }} />
        </NavLink>
        <div className="navbar" id="navbarNav">
          <span className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                exact
                to={`./About`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                exact
                to={`./Portfolio`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                My Portfolio
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                exact
                to={`./Blog`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                My Blog
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                exact
                to={`./Contact`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>
          </span>
        </div>
      </nav>
    );
  }

  state = {};
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
