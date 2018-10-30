import { combineReducers } from 'redux';

import auth from './modules/Auth/_reducer';

export default combineReducers({
  auth,
});
