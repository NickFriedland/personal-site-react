import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
// import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main-content" style={{ height: '600px' }}>
          <Switch>
            <Route exact path="/" render={() => <About />} />
            <Route exact path="/portfolio" render={() => <Portfolio />} />
            <Route exact path="/blog" render={() => <Blog />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
