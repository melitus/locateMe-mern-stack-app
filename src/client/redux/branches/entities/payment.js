import { createAction, handleActions } from 'redux-actions';
import { createActionWithPayload } from '../../utils/';

export const initialState = {};

const createActionName = name => `payment/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const DO_PAYMENT = createActionName('DO_PAYMENT');
export const TRANSIT_TO_CONFIRMATION = createActionName('TRANSIT_TO_CONFIRMATION');
export const _MAKE_REQUEST = createActionName('MAKE_REQUEST');
export const _REQUEST_SUCCESS = createActionName('REQUEST_SUCCESS');
export const _REQUEST_ERROR = createActionName('REQUEST_ERROR');

// Action creators
export const doPayment = createActionWithPayload(DO_PAYMENT);
export const transitToConfirmation = createAction(TRANSIT_TO_CONFIRMATION);
export const _makeRequest = createActionWithPayload(_MAKE_REQUEST);
export const _requestSuccess = createActionWithPayload(_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(_REQUEST_ERROR);

// Reducer
export const reducer = handleActions(
  {
    [_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...payload.data,
    }),
  },
  initialState
);
