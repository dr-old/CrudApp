import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: {},
  error: {},
  user: {},
  users: [],
};

// eslint-disable-next-line no-undef
export default userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.INSERT_USER:
      return {
        ...state,
        loading: true,
      };

    case types.UPDATE_USER:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_USER:
      return {
        ...state,
        loading: true,
      };

    case types.GET_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case types.GET_DETAIL_USER:
      return {
        ...state,
        loading: true,
      };

    case types.UPDATE_DETAIL_USER:
      return {
        ...state,
        loading: false,
        user: payload,
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

    // GET LIST USET
    case types.GET_LIST_USER:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_LIST_USER:
      return {
        ...state,
        loading: false,
        users:
          payload?.page === 1
            ? payload.data
            : [...state.users, ...payload.data],
      };
    case types.UPDATE_LIST_USER_RESET:
      return {
        ...state,
        loading: false,
        users: [],
      };

    default:
      return state;
  }
};
