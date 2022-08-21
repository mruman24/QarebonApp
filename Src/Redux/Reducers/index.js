import { combineReducers } from 'redux'
import authReducer from './auth';
import productReducer from './product';
import datalistReducer from './datalist';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  datalist: datalistReducer,
});