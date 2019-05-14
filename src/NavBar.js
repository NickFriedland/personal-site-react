import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {
  Navbar,
  Nav,
  NavItem} from 'reactstrap';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontSize: '1.5em',
      color: 'black' 
    }
    return (
      // <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <nav>
        <Navbar expand='md' className='nav'>
          <NavLink to='/' activeStyle={activeStyle}> Nick Friedland </NavLink>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to='/' className='normal' activeClassName='active'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to='/Portfolio' className='normal' activeClassName='active'>Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to='/Blog' className='normal' activeClassName='active'>Blog</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink exact to='/Contact' className='normal' activeClassName='active'>Contact</NavLink>
              </NavItem> */}
            </Nav>
        </Navbar>
      </nav>
    );
  }

  state = {};
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
