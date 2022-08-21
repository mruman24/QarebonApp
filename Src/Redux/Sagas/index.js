import { fork, all } from 'redux-saga/effects';
import { authWatcher } from './auth/index';
import { productWatcher } from './product/index';
import { datalistWatcher } from './datalist/index';

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(productWatcher),
    fork(datalistWatcher),
  ])
}