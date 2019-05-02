import React, { Component } from 'react';
//import './Portfolio.css';
// import styled from 'styled-components';
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
import relish from './images/portfolio_images/relish_homepage.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <CardDeck>
          <Card>
            <CardImg
              top
              src={relish}
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
    );
  }

  state = {};
}

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
