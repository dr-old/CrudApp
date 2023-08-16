import {spawn} from 'redux-saga/effects';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield spawn(userSaga);
}
