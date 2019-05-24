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
  constructor(props) {
    super(props);
        this.state = {};
    this.generateCard = this.generateCard.bind(this);
  }

  generateCard() {
    let arr = blog_posts["posts"];
    return arr.map(function(post) {
      // return <img src={post["image"]} alt=""/>
      return <Card key={post["href"]} id="blog-card" >
                <div className="card-image">
                  <CardImg
                    width="100%"
                    src={require(`./images/blog_images/post_images/${post["image"]}`)}
                    alt="Card image cap"
                  />
                  <img src={require(`./images/blog_images/post_images/team_logos/${post["logo"]}`)} alt="" className="team-logo" />
                </div>
                <CardBody>
                  <CardTitle id="title">{post["title"]}</CardTitle>
                  <CardSubtitle id="published-date">Published: {post["date"]}</CardSubtitle>
                  <CardText id="text">
                    {post["text"]}
                  </CardText>
                  <form action={post["href"]} method="get" target="_blank">
                    <Button id="button">Read More</Button>
                  </form>
                </CardBody>
              </Card>
      });
  };

      // return cards;

  render() {
    // console.log(blog_posts)
    // let arr = blog_posts["posts"];

    return (
      <div className="Blog">
        <div className="blog-hero">
          <h1>The Twelve Dollar Beer Tour</h1>
          <h3>In 2017 I attended one game at every MLB ballpark. 
            Here's what happened along the way.</h3>
          <img src={ cincy } alt="" />
        </div>
        <div className="blog-body">
          <CardDeck className="card-deck">
            {this.generateCard()}
          <h1>More to come!</h1> 
          </CardDeck>
        </div>
      </div>
    );
  }

  state = {};
}

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;