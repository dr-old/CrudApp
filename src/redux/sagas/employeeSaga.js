import {showMessage} from 'react-native-flash-message';
import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getApi, postApi} from '../apis/baseApi';

function* fetchEmployee({payload}) {
  const response = yield call(getApi, payload);
  if (response === 'Token Expired') {
    showMessage({
      message: 'Invalid',
      description: response,
      type: 'danger',
    });
    yield put({type: 'SET_USER_CLEAN'});
  } else if (Array.isArray(response) && response?.length > 0) {
    yield put({
      type: types.GET_EMPLOYEE_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.GET_EMPLOYEE_FAILURE, payload: response});
  }
}

function* fetchEmployeeDetail({payload}) {
  const response = yield call(getApi, payload);
  if (response === 'Token Expired') {
    // typeof {id:1, name:'danni'} === 'object'
    showMessage({
      message: 'Invalid',
      description: response,
      type: 'danger',
    });
    yield put({type: 'SET_USER_CLEAN'});
  } else if (response?.id) {
    yield put({
      type: types.GET_EMPLOYEE_DETAIL_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.GET_EMPLOYEE_DETAIL_FAILURE, payload: response});
  }
}

function* insertEmployee({payload}) {
  try {
    const response = yield call(postApi, payload);
    if (response === 'Token Expired') {
      showMessage({
        message: 'Invalid',
        description: response,
        type: 'danger',
      });
      yield put({type: 'SET_USER_CLEAN'});
    } else if (response === 'User Successfully Created') {
      yield put({
        type: types.GET_EMPLOYEE_DETAIL_SUCCESS,
        payload: {message: response, data: response},
      });
    } else {
      yield put({
        type: types.GET_EMPLOYEE_DETAIL_FAILURE,
        payload: {message: 'Create employee is failed', data: response},
      });
    }
  } catch (error) {
    yield put({
      type: types.GET_EMPLOYEE_DETAIL_FAILURE,
      payload: error,
    });
  }
}

export default function* employeeSaga() {
  yield takeLatest(types.GET_EMPLOYEE, fetchEmployee);
  yield takeLatest(types.GET_EMPLOYEE_DETAIL, fetchEmployeeDetail);
  yield takeLatest(types.INSERT_EMPLOYEE, insertEmployee);
}
