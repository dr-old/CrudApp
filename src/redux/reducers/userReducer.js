import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

// eslint-disable-next-line no-undef
export default userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.INSERT_USER:
      return {
        ...state,
        loading: true,
      };

    case types.GET_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case types.USER_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.USER_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.USER_RESET:
      return {
        ...state,
        loading: false,
        data: {},
        error: {},
      };

    default:
      return state;
  }
};
