import {types} from './types';

export function insertUserData(data) {
  return {
    type: types.INSERT_USER,
    payload: data,
  };
}

export function loginUserData(data) {
  return {
    type: types.GET_LOGIN,
    payload: data,
  };
}
