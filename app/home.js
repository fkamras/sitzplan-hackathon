import React from 'react';

import { Link } from 'react-router';

export const Home = React.createClass({

  render() {
    return (
      <div className="hero">
        <h1 className="hero__title">Applause <small>who sits where</small></h1>
        <ul className="hero__navigation">
          <li><Link to="/map/">Go</Link></li>
          <li><Link to="/signup/">Sign Up</Link></li>
          <li><Link to="/login/">Log In</Link></li>
          <li><Link to="/offices/">Offices</Link></li>
        </ul>
        <p className="hero__footer">
          &copy;2016 Applause Creative Services
        </p>
      </div>
    )
  }

});
