import { postAPI$ /* , deleteAPI$, getAPI$, putAPI$ */} from '../utils/ioUtils';
import apiPathsRoot from '../../shared/apiPaths';

const apiPaths = apiPathsRoot.children;

/* eslint-disable import/prefer-default-export */
const createCompany$ = companyRequest =>
  postAPI$(apiPaths.payment.path, { body: companyRequest });
/* eslint-disable import/prefer-default-export */

export {
   createCompany$,
};
