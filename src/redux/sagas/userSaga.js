import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {
  deleteApiFake,
  getApiFake,
  postApiFake,
  putApiFake,
} from '../apis/baseApi';
import {updateDetailUserData, updateListUserData} from '../actions/userAction';

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

function* updateUser({payload}) {
  const response = yield call(putApiFake, payload);
  if (response?.name) {
    yield put(updateDetailUserData(response));
    const fullname = response.name.split(' ');
    yield put({
      type: 'SETALL_FORM_EMPLOYEE',
      first_name: fullname[0],
      last_name: fullname[1],
      job: response.job,
    });
  } else {
    yield put({type: types.USER_FAILURE, payload: {message: response.error}});
  }
}

function* deleteUser({payload}) {
  const response = yield call(deleteApiFake, payload);
  console.log('deleteUser', response);
  yield put(updateDetailUserData({...response, delete: true}));
}

function* detailUser({payload}) {
  const response = yield call(getApiFake, payload);
  if (response?.data) {
    yield put({
      type: types.USER_SUCCESS,
      payload: {data: response.data, message: 'User is found'},
    });
    yield put({
      type: 'SETALL_FORM_EMPLOYEE',
      first_name: response.data.first_name,
      last_name: response.data.last_name,
      job: response.data?.job ?? '',
    });
    console.log('details', response.data);
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
  yield takeLatest(types.UPDATE_USER, updateUser);
  yield takeLatest(types.DELETE_USER, deleteUser);
  yield takeLatest(types.GET_LOGIN, loginUser);
  yield takeLatest(types.GET_LIST_USER, listUser);
  yield takeLatest(types.GET_DETAIL_USER, detailUser);
}
