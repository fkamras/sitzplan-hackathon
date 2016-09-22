import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import css from './styles/main.scss';

require('file?name=[name].[ext]!./index.html');

import { App } from './app.js';
import { Home } from './home.js';
import { SignUp } from './sign-up.js';
import { Game } from './game.js';
import { LogIn } from './login.js';

const NoMatch = React.createClass({
  render() {
    return (
      <h1>404</h1>
    )
  }
});

import { Provider } from 'react-redux';
import store, { history } from './store.js';

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="signup" component={SignUp}/>
        <Route path="login" component={LogIn} />
        <Route path="map" component={Game} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
