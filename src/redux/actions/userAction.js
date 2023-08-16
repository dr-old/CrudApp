import {types} from './types';

export function listUserData(data) {
  return {
    type: types.GET_LIST_USER,
    payload: data,
  };
}

export const detailUserData = data => ({
  type: types.GET_DETAIL_USER,
  payload: data,
});

export const updateListUserData = users => ({
  type: types.UPDATE_LIST_USER,
  payload: users,
});

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
