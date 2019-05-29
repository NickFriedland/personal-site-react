import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/NF.png';
import './NavBar.css';
import {
  Navbar,
  Nav,
  NavItem,
  // Collapse,
  // NavbarToggler,
  // UncontrolledDropdown,
  // DropdownMenu,
  // DropdownItem,
  // DropdownToggle 
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar expand='md'>
        <NavLink to='/'><span className="nav-text">Nick Friedland</span><img src={logo} alt="" className="nav-logo" /></NavLink>
        <Nav className="ml-auto md" navbar>
          <NavItem>
            <NavLink exact to='/' className='normal' activeClassName='active'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to='/Portfolio' className='normal' activeClassName='active'>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to='/Blog' className='normal' activeClassName='active'>Blog</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
          /* <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto md nav-small" navbar>
            <UncontrolledDropdown nav inNavbar navbar-expand-md>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink exact to='/' className='normal' activeClassName='active'>About</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink exact to='/Portfolio' className='normal' activeClassName='active'>Portfolio</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink exact to='/Blog' className='normal' activeClassName='active'>Blog</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse> */
    );
  }

  state = {};
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
