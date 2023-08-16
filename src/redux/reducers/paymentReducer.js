import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: {},
  error: {},
  dataList: {},
  errorList: {},
};

// eslint-disable-next-line no-undef
export default paymentReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.CHARGE_PAYMENT:
      return {
        ...state,
        loading: true,
      };
    case types.STATUS_PAYMENT:
      return {
        ...state,
        loading: true,
      };
    case types.PAYMENT_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.PAYMENT_RESET:
      return {
        ...state,
        loading: false,
        data: {},
        error: {},
      };

    // GET LIST PAYMENT
    case types.GET_PAYMENT:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PAYMENT_SUCCESS:
      return {
        ...state,
        dataList: payload,
        errorList: {},
        loading: false,
      };
    case types.GET_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        dataList: {},
        errorList: payload,
      };
    case types.GET_PAYMENT_RESET:
      return {
        ...state,
        loading: false,
        dataList: {},
        errorList: {},
      };

    default:
      return state;
  }
};
