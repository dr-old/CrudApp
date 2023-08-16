import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getApiFake, postApiFake} from '../apis/baseApi';
import {updateListUserData} from '../actions/userAction';

function* loginUser({payload}) {
  const response = yield call(postApiFake, payload);
  if (response?.token) {
    yield put({
      type: types.USER_SUCCESS,
      payload: {token: response.token, message: 'Login successfull'},
    });
  } else {
    yield put({type: types.USER_FAILURE, payload: {message: response.error}});
  }
}

function* detailUser({payload}) {
  const response = yield call(getApiFake, payload);
  if (response?.data) {
    yield put({
      type: types.USER_SUCCESS,
      payload: {data: response.data, message: 'User is found'},
    });
  } else {
    yield put({type: types.USER_FAILURE, payload: {message: response.error}});
  }
}

function* listUser({payload}) {
  try {
    const response = yield call(getApiFake, payload);
    yield put(updateListUserData({page: payload.page, data: response.data}));
  } catch (error) {
    yield put({
      type: types.UPDATE_LIST_USER_RESET,
      payload: {message: error?.message},
    });
  }
}

export default function* userSaga() {
  // yield takeLatest(types.INSERT_USER, insertUser);
  yield takeLatest(types.GET_LOGIN, loginUser);
  yield takeLatest(types.GET_LIST_USER, listUser);
  yield takeLatest(types.GET_DETAIL_USER, detailUser);
}
