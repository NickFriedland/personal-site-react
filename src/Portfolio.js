import React, { Component } from 'react';
import './Portfolio.css';
import relish from './images/portfolio_images/relish_logo.png';
import langly from './images/portfolio_images/langly.png';
import subway from './images/portfolio_images/blue.png'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-header">
          <h1>Portfolio Projects</h1>
          <h3>Examples of my work from hackathons, passion projects and internships.</h3>
          <img src={ subway } alt="" />
        </div>
        <div className="portfolio-odd">
          <img src={langly} alt="" className="portfolio-img col-6"/>  
          <div className="portfolio-desc col-4">
            <h3>Lang.ly</h3>
            <p>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <p>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="portfolio-even">
          <img src={relish} alt="" className="portfolio-img col-6"/>  
          <div className="portfolio-desc col-4">
            <h3>The Relish</h3>
            <p>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <p>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
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
