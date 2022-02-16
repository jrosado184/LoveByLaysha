import {
  FETCH_APPOINTMENTS,
  RECEIVE_APPOINTMENTS,
} from "../actions/appointment-actions";

const initialState = {
  appointments: [],
  allAppointments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case RECEIVE_APPOINTMENTS:
      return {
        ...state,
        allAppointments: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
