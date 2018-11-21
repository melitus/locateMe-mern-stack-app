import { getFormValues, submit as createSubmit } from 'redux-form';
import { createSelector } from 'reselect';

import { doPayment } from '../entities/payment';

export const getInitialData = () => ({
  paymentMethods: {
    card: 'card',
    cash: 'cash',
    instalment: 'instalment',
  },
  payment: {
    method: 'cash',
  },
});

// Actions
export const FORM_NAME = 'form/PAYMENT_METHOD_FORM';

// Action creators
export const submit = createSubmit(FORM_NAME);

// Selectors
export const selectPaymentForm = getFormValues(FORM_NAME);

export const selectPaymentMethods = createSelector(
  selectPaymentForm,
  form => form.paymentMethods
);

// Dispatch
export const onSubmit = ({ payment }, dispatch) => (
  new Promise((resolve) => {
    resolve();
    const { method } = payment;
    console.log('method:', method);
    dispatch(doPayment({ paymentMethod: method }));
  })
);
