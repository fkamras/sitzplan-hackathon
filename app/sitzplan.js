import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import css from './styles/main.scss';

require('file?name=[name].[ext]!./index.html');

import { App } from './app.js';
import { Home } from './home.js';

import { Settings } from './settings.js';
import { Offices } from './offices.js';
import { Office } from './office.js';
import { Departments } from './departments.js';

import { SignUp } from './sign-up.js';
import { Avatars } from './avatars.js';

import { Game } from './game.js';
import { LogIn } from './login.js';

const NoMatch = React.createClass({
  render() {
    return (
      <div className="hero">
        <h1 className="hero__title">404 <small>NOT FOUND</small></h1>
        <ul className="hero__navigation">
          <li><Link to="/" >Home</Link></li>
        </ul>
      </div>
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
        <Route path="settings" component={Settings}/>
        <Route path="offices" component={Offices}/>
        <Route path="offices/:officeKey" component={Office} />
        <Route path="departments" component={Departments}/>
        <Route path="signup" component={SignUp}/>
        <Route path="avatars" component={Avatars}/>
        <Route path="login" component={LogIn} />
        <Route path="map" component={Game} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
