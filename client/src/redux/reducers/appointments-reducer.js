import { FETCH_APPOINTMENTS } from "../actions/appointment-actions";

const initialState = {
  appointments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
