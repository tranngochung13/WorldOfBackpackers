import _ from 'lodash';
import { combineReducers } from 'redux';
import userReducer from './actions/userAction/reducer';

const myReducer = combineReducers({
  user: userReducer,
});

export default myReducer;
