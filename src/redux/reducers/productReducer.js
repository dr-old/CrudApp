import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: {},
  dataDetail: {},
  errorDetail: {},
};

// eslint-disable-next-line no-undef
export default productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.GET_PRODUCT_RESET:
      return {
        ...state,
        loading: false,
        data: {},
        error: {},
      };

    // FOR DETAIL
    case types.GET_PRODUCT_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        dataDetail: payload,
        errorDetail: {},
        loading: false,
      };
    case types.GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        dataDetail: {},
        errorDetail: payload,
      };
    case types.GET_PRODUCT_DETAIL_RESET:
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
