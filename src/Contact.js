import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Contact.css';
// import styled from 'styled-components';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Let's Connect!</h1>
        <div className="link-container">
          <a
            href="https://github.com/NickFriedland"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/nick-friedland-70159949/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:nick.friedland@gmail.com">
            <i className="far fa-envelope" />
          </a>
          <a
            href="https://angel.co/nick-friedland?public_profile=1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-angellist" />
          </a>
        </div>
      </div>
    );
  }

  state = {};
}

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
