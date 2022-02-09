import { LOGIN } from "../actions/API_CALLS";
const initialState = {
  login: {
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
