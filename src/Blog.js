import React, { Component } from 'react';
//import './Blog.css';
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

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <h1>The Twelve Dollar Beer Tour</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus
          euismod ante, non venenatis eros viverra et. Aliquam ullamcorper felis
          mi, ut sagittis purus dignissim a. Nam vel imperdiet neque, ut porta
          nibh. Proin ultrices quam a ante condimentum, sed cursus massa
          ultrices. In arcu nisl, efficitur vel tempor et, lobortis vel elit.
          Maecenas vitae elit aliquam, maximus velit ac, viverra eros. Nam
          hendrerit sed augue vel consectetur. Aliquam erat volutpat. Donec
          feugiat, nunc id suscipit varius, enim dolor sagittis quam, vitae
          convallis augue purus id magna. Suspendisse et feugiat nisl, et
          malesuada est. Curabitur a quam leo. Fusce varius volutpat commodo.
          Phasellus at tincidunt turpis.
        </p>
        <CardDeck>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
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
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
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
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
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

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
