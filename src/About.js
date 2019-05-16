import React, { Component } from 'react';
import nick from './images/Nick_about.png';
import './About.css';
// import styled from 'styled-components';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-header">
          <img src={nick} alt="" className="headshot-img"/>
          <div className="about-header-desc">
            <h1 className="about-header-title">Nick Friedland</h1>
            <h2 className="about-header-subtitle">Full stack software engineer passionate about environmental and social innovation</h2>
          </div>
        </div>
        <div className="body">
          <div className="col-6">
            <h2 className="section-header">About Me</h2>
            <p>
              I am a full stack software engineer with experience in JavaScript- including React.js, Redux.js, jQuery, Node.js, and Express- as well as backend Python, Flask, and PostgreSQL and frontend HTML5 and CSS3. I'm passionate about making a positive social and environmental impact in my work, and am especially excited about green tech and environmental innovation.
            </p>
            <p>
              In my personal time I enjoy making art, writing, cooking, listening to all kinds of music, language learning, and various other creative pursuits. I’m fluent in Spanish and eager to learn more languages.
            <p>
            </p>
              I’m currently located in Northern California, which is where I grew up, but I love to travel and am open to opportunities and adventures domestically and abroad.
            </p>
          </div>
          <div className="col-2 contact">
            <h2 className="section-header">Contact</h2>
            <div className="about-link-container">
              
              <a
                href="https://github.com/NickFriedland"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/nick-friedland/"
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
        </div>
      </div>
    );
  }

  state = {};
}

About.propTypes = {};

About.defaultProps = {};

export default About;
