import { createStore } from 'redux';

const reducer = (state = [], action) => {
  console.log('REDUCER:', action);
  switch (action.type) {
    case 'FETCH_STUDENTS':
      console.log('PAYLOAD:', action.payload);
      return [state, ...action.payload]; // Need to update state here
    default:
      return state;
  }
};

export default createStore(reducer);
