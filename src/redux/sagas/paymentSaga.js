import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getApi, postApi} from '../apis/baseApi';

function* chargePayment({payload}) {
  const response = yield call(postApi, payload);
  if (response.status >= 200 && response.status <= 308) {
    yield put({
      type: types.PAYMENT_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.PAYMENT_FAILURE, payload: response});
  }
}

function* statusPayment({payload}) {
  const response = yield call(getApi, payload);
  if (response.status >= 200 && response.status <= 308) {
    yield put({
      type: types.PAYMENT_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.PAYMENT_FAILURE, payload: response});
  }
}

function* historyPayment({payload}) {
  const response = yield call(getApi, payload);
  if (response.status >= 200 && response.status <= 308) {
    yield put({
      type: types.GET_PAYMENT_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.GET_PAYMENT_FAILURE, payload: response});
  }
}

export default function* paymentSaga() {
  yield takeLatest(types.CHARGE_PAYMENT, chargePayment);
  yield takeLatest(types.STATUS_PAYMENT, statusPayment);
  yield takeLatest(types.GET_PAYMENT, historyPayment);
}
