import { FETCHING_LOCATION } from '../actions/constants/actionTypes';

const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0,
    inProgress: false
  }
};

const LocationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCHING_LOCATION:
      return Object.assign({}, state, action.coords);
    default:
      return state;
  }
};


export default LocationReducer;
