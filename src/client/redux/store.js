import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { ReduxObservable } from './utils/';
import initialState from './initialState';
import reducers from './rootReducers';
import rootEpic from './rootEpic';
import devToolsEnhancer from './devToolsEnhancer';

const middlewares = [
  thunk, logger,
  ReduxObservable.createEpicMiddleware(rootEpic),
];


const store = createStore(reducers, initialState, composeWithDevTools(
  applyMiddleware(...middlewares),
  devToolsEnhancer
));

export default store;
