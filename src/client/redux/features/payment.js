import { Observable } from 'rxjs';

import { makePayment$ } from '../../api/';
import { ReduxObservable } from '../utils/';

import {
  transitToConfirmation,
  _makeRequest,
  _requestSuccess,
  _requestError,
  DO_PAYMENT
} from '../branches/entities/payment';

const doPaymentEpic = action$ =>
  action$
    .ofType(DO_PAYMENT)
    .switchMap((action) => {
      console.log('action:', action);
      return Observable.concat(
        Observable.of(_makeRequest({
          data: action.payload,
        })),
        makePayment$(action.payload)
          .switchMap(response =>
            Observable.concat(
              Observable.of(_requestSuccess({
                data: response.data
              })),
              Observable.of(transitToConfirmation({}))
            ))
          .catch((error) => {
            console.log('API-ERROR:', error);
            return Observable.of(_requestError({
              error
            }));
          })
      );
    });

/* eslint-disable import/prefer-default-export */
export const paymentEpic = ReduxObservable.combineEpics(
  doPaymentEpic
);
/* eslint-disable import/prefer-default-export */
