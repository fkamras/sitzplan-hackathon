import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import rootReducer from './reducers/index.js';


const defaultState = {
  offices: [{
    name: 'Berlin',
    maps: [
      { name: 'Main Room' },
      { name: 'Administrations' },
      { name: 'BDR' }
    ]
  }, {
    name: 'Framingham',
    maps: [
      { name: '1st Floor' },
      { name: '2nd Floor' }
    ]
  }]
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
