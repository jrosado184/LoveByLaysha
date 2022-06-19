import loginReducer from './login-reducer';
import appointmentsReducer from './appointments-reducer';
import disabledReducer from './disabled-reducer';
import themeReducer from './theme-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  login: loginReducer,
  appointments: appointmentsReducer,
  disabled: disabledReducer,
  theme: themeReducer,
});

export default reducer;
