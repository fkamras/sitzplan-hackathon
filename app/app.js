import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index.js';
import { Main } from './main.js';

//fetch polyfill for ajax calls
import 'whatwg-fetch';

function mapStateToProps(state) {
  return {
    offices: state.offices
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



export const App = connect(mapStateToProps, mapDispachToProps)(Main)

