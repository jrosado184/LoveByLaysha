import loginReducer from "./login-reducer";
import appointmentsReducer from "./appointments-reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  login: loginReducer,
  appointments: appointmentsReducer,
});

export default reducer;
