import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getApi, getApiFake} from '../apis/baseApi';

function* fetchProduct({payload}) {
  const response = yield call(getApiFake, payload);
  if (response?.length > 0) {
    yield put({
      type: types.GET_PRODUCT_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.GET_PRODUCT_FAILURE, payload: response});
  }
}

function* fetchProductDetail({payload}) {
  const response = yield call(getApiFake, payload);
  if (response?.id) {
    yield put({
      type: types.GET_PRODUCT_DETAIL_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.GET_PRODUCT_DETAIL_FAILURE, payload: response});
  }
}

export default function* productSaga() {
  yield takeLatest(types.GET_PRODUCT, fetchProduct);
  yield takeLatest(types.GET_PRODUCT_DETAIL, fetchProductDetail);
}
