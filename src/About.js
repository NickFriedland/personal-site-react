import React, { Component } from 'react';
import nick from './images/Nick_about.png';
import './About.css';
// import styled from 'styled-components';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="header">
          <div className="headshot">
            <img src={nick} alt="" className="headshot-img"/>
          </div>
          <div className="header-desc">
            <h1 className="header-title">Nick Friedland</h1>
            <h2 className="header-subtitle">Full stack software engineer passionate about environmental and social innovation</h2>
          </div>
        </div>
        <div className="body">
          <div className="col-6">
            <h2 className="section-header">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor a enim vel interdum. Morbi mollis magna enim, tempor
              imperdiet odio iaculis sit amet. Proin commodo interdum nunc nec
              pharetra. Ut et ornare mauris. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Praesent
              efficitur, felis sed tincidunt tincidunt, est enim viverra leo,
              sit amet luctus ante odio pellentesque erat. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Vivamus pulvinar ex quis purus aliquam, ut feugiat ipsum
              mattis. Maecenas sed metus quis neque lobortis gravida.
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
