import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users.js';
import offices from './offices.js';

const rootReducer = combineReducers({users, offices, routing: routerReducer });

export default rootReducer;
