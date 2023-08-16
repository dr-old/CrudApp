import {types} from './types';

export function fetchEmployeeData(data) {
  return {
    type: types.GET_EMPLOYEE,
    payload: data,
  };
}

export function fetchEmployeeDetailData(data) {
  return {
    type: types.GET_EMPLOYEE_DETAIL,
    payload: data,
  };
}

export function insertEmployeeData(data) {
  return {
    type: types.INSERT_EMPLOYEE,
    payload: data,
  };
}
