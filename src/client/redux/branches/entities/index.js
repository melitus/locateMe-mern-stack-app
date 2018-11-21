import { combineReducers } from 'redux';

import { reducer as payment } from './payment';

/* eslint-disable import/prefer-default-export */
export const reducer = combineReducers({
  payment,
});
/* eslint-disable import/prefer-default-export */
