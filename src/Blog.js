import React, { Component } from 'react';
import './Blog.css';
import cincy from './images/blog_images/cincy_big.png';
import blog_posts from './blogs.json';
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
    console.log(blog_posts)

    return (
      <div className="Blog">
        <div className="blog-hero">
          <h1>The Twelve Dollar Beer Tour</h1>
          <h3>In 2017 I attended one game at every MLB ballpark. 
            Here's what happened along the way.</h3>
          <img src={ cincy } alt="" />
        </div>
        
        <CardDeck className="tests">
          <Card>
            <CardImg
              width="100%"
              src={cincy}
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
              src=""
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
              src=""
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
