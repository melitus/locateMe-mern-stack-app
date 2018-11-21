import { handleActions } from 'redux-actions';

import {
  _MAKE_REQUEST, _REQUEST_SUCCESS, _REQUEST_ERROR,
} from '../entities/payment';

import {
  createPendingLoadDetails, createSuccessLoadDetails, createErrorLoadDetails,
} from '../../utils/';

export const initialState = {};
export const reducer = handleActions(
  {
    [_MAKE_REQUEST]: (state, { payload }) => ({
      loadDetails: createPendingLoadDetails(payload),
    }),
    [_REQUEST_SUCCESS]: (state, { payload }) => ({
      loadDetails: createSuccessLoadDetails(payload),
    }),
    [_REQUEST_ERROR]: (state, { payload }) => ({
      loadDetails: createErrorLoadDetails(payload.error),
    }),
  },
  initialState
);
