import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import { hot } from 'react-hot-loader';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'React SSR Template'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>

        <Helmet>
          <title>React SSR Template</title>
          <meta name="description" content="This is React SSR Template!" />
        </Helmet>
      </div>
    );
  }
}

export default hot(module)(Container);
