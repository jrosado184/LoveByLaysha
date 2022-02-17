import { LOGIN, LOGGEDIN, LOGOUT } from "../actions/login_actions";
const initialState = {
  login: {
    message: "",
  },
  loggedIn: "",
  logout: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: {
          message: action.payload.message,
        },
      };
    case LOGGEDIN:
      return {
        ...state,
        login: {
          message: localStorage.getItem("message"),
        },
        loggedIn: localStorage.getItem("token"),
      };
    case LOGOUT: {
      return {
        ...state,
        logout: localStorage.clear(),
      };
    }
    default:
      return state;
  }
};

export default reducer;
