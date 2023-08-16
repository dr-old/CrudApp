import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getApi, postApi} from '../apis/baseApi';

function* insertUser({payload}) {
  const response = yield call(postApi, payload);
  if (response?.status >= 200 && response?.status <= 308) {
    yield put({
      type: types.USER_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.USER_FAILURE, payload: response});
  }
}

function* loginUser({payload}) {
  const response = yield call(postApi, payload);
  if (response?.status >= 200 && response?.status <= 308) {
    yield put({
      type: types.USER_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.USER_FAILURE, payload: response});
  }
}

// function* loginUser({payload}) {
//   try {
//     const response = yield call(postApi, payload);
//     if (response === 'Username or Password not known') {
//       yield put({
//         type: types.USER_FAILURE,
//         payload: {message: response, data: response},
//       });
//     } else {
//       yield put({
//         type: types.USER_SUCCESS,
//         payload: {message: 'Login success', data: response},
//       });
//     }
//   } catch (error) {
//     yield put({
//       type: types.USER_FAILURE,
//       payload: error,
//     });
//   }
// }

export default function* userSaga() {
  yield takeLatest(types.INSERT_USER, insertUser);
  yield takeLatest(types.GET_LOGIN, loginUser);
}
