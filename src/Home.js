import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './Home.css';
// import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link to="./About">
          <h1>About Me</h1>
        </Link>
        <Link to="./Portfolio">
          <h1>Portfolio</h1>
        </Link>
        <Link to="./Blog">
          <h1>Blog</h1>
        </Link>
        <Link to="./Contact">
          <h1>Contact</h1>
        </Link>
      </div>
    );
  }

  state = {};
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
