import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { GameMap } from './game-map.js';

require('file?name=[name].[ext]!./index.html');

const App = React.createClass({
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/signup/">Sing Up</Link>
        <Link to="/login/">Log In</Link>
        <Link to="/map/">Map</Link>
        <h1>Hello!</h1>
        {this.props.children}
      </div>
    )
  }
})

const SignUp = React.createClass({
  render() {
    return (
      <div>
        SignUp
      </div>
    )
  }
});

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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="signup" component={SignUp}/>
      <Route path="login" component={LogIn} />
      <Route path="map" component={GameMap} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
