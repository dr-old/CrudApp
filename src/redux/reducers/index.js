import {combineReducers} from 'redux';
import employeeReducer from './employeeReducer';
import generalReducer from './generalReducer';
import paymentReducer from './paymentReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

export default combineReducers({
  generalReducer,
  productReducer,
  paymentReducer,
  userReducer,
  employeeReducer,
});
