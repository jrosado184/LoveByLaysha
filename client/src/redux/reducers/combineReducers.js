import loginReducer from "./login-reducer";
import appointmentsReducer from "./appointments-reducer";
import disabledReducer from "./disabled-reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  login: loginReducer,
  appointments: appointmentsReducer,
  disabled: disabledReducer,
});

export default reducer;
