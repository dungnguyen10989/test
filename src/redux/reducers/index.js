import { combineReducers } from 'redux';

import { _rootNav, _authNav } from './navigators';


export default combineReducers({
  _rootNav,
  _authNav,
})