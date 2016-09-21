import React from 'react';
import { Link } from 'react-router';

export const App = React.createClass({
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
});
