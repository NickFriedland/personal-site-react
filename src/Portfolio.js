import React, { Component } from 'react';
import './Portfolio.css';
import relish from './images/portfolio_images/relish_logo.png';
import langly from './images/portfolio_images/langly.png';
import subway from './images/portfolio_images/blue.png';
import api from './images/portfolio_images/tech/api.png';
import d3 from './images/portfolio_images/tech/d3.png';
import firebase from './images/portfolio_images/tech/firebase.png';
import flask from './images/portfolio_images/tech/flask.png';
import heroku from './images/portfolio_images/tech/heroku.png';
import js from './images/portfolio_images/tech/js.png';
import css from './images/portfolio_images/tech/css.png';
import html from './images/portfolio_images/tech/html.png';
import moment from './images/portfolio_images/tech/moment.js.png';
import node from './images/portfolio_images/tech/node.png';
import python from './images/portfolio_images/tech/python.png';
import react from './images/portfolio_images/tech/react.png';
import redux from './images/portfolio_images/tech/redux.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-hero">
          <h1>Portfolio Projects</h1>
          <h3>Examples of my work from hackathons, passion projects and internships.</h3>
          <img src={ subway } alt="" />
        </div>
        <div className="project langly">
          <div className="col-6 langly-left">
            <div className="item langly-item">
              <img src={langly} alt=""/>
              <a href="https://github.com/NickFriedland/langly-react-fe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github portfolio-github"></i>
              </a>
              <a href="https://langly-readability.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="far fa-share-square"></i>
              </a>
            </div>
            <div className="tech-logos langly-logos">
              <img src={js} alt="" id="js-html-css"/>
              <img src={css} alt="" id="js-html-css"/>
              <img src={html} alt="" id="js-html-css"/>
              <img src={react} alt=""/>
              <img src={node} alt=""/>
              <img src={python} alt=""/>
              <img src={flask} alt=""/>
              <img src={api} alt=""/>
              <img src={heroku} alt=""/>
            </div>
          </div>
          <div className="desc langly-desc col-4">
            <h3 className="title">Langly</h3>
            <p>
              This project was the result of a two day hackathon. If given a URL for an article, it generates an estimated readability score, and formats the content for more convenient online reading.
            </p>
            <p>
              The app makes use of several well-known readability algorithms, npm and python packages, and API integrations. Desired future functionality includes foreign language support, selecting words to define (or translate) in a tool tip, and storing vocab as flashcards in a database.
            </p>
          </div>
        </div>
        <div className="project relish">
          <div className="col-6">  
            <div className="item relish-item">
              <img src={relish} alt="" />
              <a href="https://www.therelish.com/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-medium-m"></i>
              </a>
            </div>
            <div className="tech-logos relish-logos">
              <img src={js} alt="" id="js-html-css"/>
              <img src={css} alt="" id="js-html-css"/>
              <img src={html} alt="" id="js-html-css"/>
              <img src={react} alt=""/>
              <img src={redux} alt=""/>
              <img src={firebase} alt=""/>
              <img src={d3} alt=""/>
              <img src={moment} alt=""/>
            </div>
          </div>   
          <div className="desc relish-desc col-4">
            <h3 className="title">The Relish</h3>
            <p>
              I interned at The Relish while attending Rithm School. The internship consisted of building features and refactoring legacy code for an internal CMS tool that they used to gather and interpret user data. 
            </p>
            <p>
              Source code and web app access for this tool are unavailable because it is proprietary. However, I wrote a Medium article that describes in detail my contributions to this tool.
            </p>
          </div>
        </div>          
      </div>
    );
  }

  state = {};
}

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
