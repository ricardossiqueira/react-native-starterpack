import {combineReducers} from 'redux';
import {themeReducer} from './theme';
import {authReducer} from './auth';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default rootReducer;
