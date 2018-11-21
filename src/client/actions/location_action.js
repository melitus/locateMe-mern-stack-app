
import { FETCHING_LOCATION } from './constants/actionTypes';

let navigator;

function requestGeolocation() {
  return function (dispatch) {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
        type: FETCHING_LOCATION,
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          inProgress: true,
        },
      });
    });
  };
}
function getGeolocation() {
  return function (dispatch) {
    if (!navigator.geolocation) {
      return dispatch({
        type: FETCHING_LOCATION
      });
    }
    return dispatch(requestGeolocation());
  };
}

export default getGeolocation;
