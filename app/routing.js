import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import css from './styles/main.scss';

require('file?name=[name].[ext]!./index.html');

import { App } from './app-component.js';
import { Home } from './home.js';
import { SignUp } from './sign-up.js';
import { Game } from './game.js';

const LogIn = React.createClass({
  render() {
    return (
      <div>
        LogIn
      </div>
    )
  }
});

const NoMatch = React.createClass({
  render() {
    return (
      <h1>404</h1>
    )
  }
});

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="signup" component={SignUp}/>
      <Route path="login" component={LogIn} />
      <Route path="map" component={Game} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
