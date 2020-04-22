import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import domainReducer from './domains';
import moduleReducer from './modules';

import queryApiMiddleWare from './middlewares/query-api';

const rootReducer = combineReducers({
  domain: domainReducer,
  ...moduleReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = null;
if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk, queryApiMiddleWare))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, queryApiMiddleWare));
}

export default store;
