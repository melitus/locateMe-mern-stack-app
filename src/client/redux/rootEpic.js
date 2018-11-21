import { ReduxObservable } from './utils/';
import { paymentEpic } from './features/payment';


export default ReduxObservable.combineEpics(
  paymentEpic
);
