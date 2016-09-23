import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import rootReducer from './reducers/index.js';


const defaultState = {
  offices: []
};

const store = createStore(rootReducer, defaultState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export const history = syncHistoryWithStore(hashHistory, store);

//hot reload reducers
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
