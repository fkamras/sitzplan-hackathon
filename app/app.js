import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//fetch polyfill for ajax calls
import 'whatwg-fetch';

import * as actionCreators from './actions/index.js';

function mapStateToProps(state) {
  return {}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



const AppClass = React.createClass({
  render() {
    return (
      <div className="app">
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export const App = connect(mapStateToProps, mapDispachToProps)(AppClass);
