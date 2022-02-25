import {
  ADD_APPOINTMENTS,
  RECEIVE_APPOINTMENTS,
} from "../actions/appointment-actions";

const initialState = {
  addAppointments: [],
  fetchAppointments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENTS:
      return {
        ...state,
        addAppointments: action.payload,
      };
    case RECEIVE_APPOINTMENTS:
      return {
        ...state,
        fetchAppointments: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
