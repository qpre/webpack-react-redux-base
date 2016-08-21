import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import { reducers } from '../reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export const store = finalCreateStore(reducer);

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);
