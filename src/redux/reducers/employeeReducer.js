import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: {},
  dataDetail: {},
  errorDetail: {},
};

// eslint-disable-next-line no-undef
export default employeeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };
    case types.GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.GET_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.GET_EMPLOYEE_RESET:
      return {
        ...state,
        loading: false,
        data: {},
        error: {},
      };

    // FOR INSERT
    case types.INSERT_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };

    // FOR DETAIL
    case types.GET_EMPLOYEE_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case types.GET_EMPLOYEE_DETAIL_SUCCESS:
      return {
        ...state,
        dataDetail: payload,
        errorDetail: {},
        loading: false,
      };
    case types.GET_EMPLOYEE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        dataDetail: {},
        errorDetail: payload,
      };
    case types.GET_EMPLOYEE_DETAIL_RESET:
      return {
        ...state,
        loading: false,
        dataDetail: {},
        errorDetail: {},
      };
    default:
      return state;
  }
};
