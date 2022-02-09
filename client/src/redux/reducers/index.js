import { LOGIN, LOGGEDIN, LOGOUT } from "../actions/API_CALLS";
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
        loggedIn: localStorage.getItem("token"),
      };
    case LOGOUT: {
      return {
        ...state,
        loggedIn: "",
      };
    }
    default:
      return state;
  }
};

export default reducer;
