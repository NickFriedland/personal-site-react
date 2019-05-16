import React, { Component } from 'react';
import './Portfolio.css';
import relish from './images/portfolio_images/relish_homepage.png';
import langly from './images/portfolio_images/langly.png';
import subway from './images/portfolio_images/blue.png'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardDeck,
  Button
} from 'reactstrap';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="portfolio-header">
          <h1>Portfolio Projects</h1>
          <h3>Examples of my work from hackathons, passion projects and internships.</h3>
          <img src={ subway } alt="" srcset=""/>
        </div>
        <div>
          <CardDeck>
            <Card>
              <CardImg
                top
                src={langly}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Langly</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                src={relish}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Microblog</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                src={relish}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Jobly</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }

  state = {};
}

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
