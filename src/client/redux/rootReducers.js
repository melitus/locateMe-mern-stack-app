import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as entities } from './branches/entities';
import { reducer as entitiesMeta } from './branches/entitiesMeta';
import location from './location_reducer';

const rootReducers = combineReducers({
  // Vendor reducers
  form: formReducer,

  // Own reducers
  entities,
  entitiesMeta,
  location,
});

export default rootReducers;
