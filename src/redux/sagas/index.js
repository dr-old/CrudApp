import {spawn} from 'redux-saga/effects';
import employeeSaga from './employeeSaga';
import paymentSaga from './paymentSaga';
import productSaga from './productSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield spawn(productSaga);
  yield spawn(paymentSaga);
  yield spawn(userSaga);
  yield spawn(employeeSaga);
}
