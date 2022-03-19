import {
  ADD_APPOINTMENTS,
  RECEIVE_APPOINTMENTS,
  GET_BY_ID,
  DELETED_APPOINTMENTS,
  COMPLETED_APPOINTMENTS,
  COMPLETED_APPOINTMENTS_ID,
} from "../actions/appointment-actions";

export const initialState = {
  addAppointments: [],
  fetchAppointments: [],
  getAppointmentById: [],
  deletedAppointments: [],
  completedAppointments: [],
  completedAppointmentsById: [],
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
    case GET_BY_ID:
      return {
        ...state,
        getAppointmentById: action.payload,
      };
    case DELETED_APPOINTMENTS:
      return {
        ...state,
        deletedAppointments: action.payload,
      };
    case COMPLETED_APPOINTMENTS:
      return {
        ...state,
        completedAppointments: action.payload,
      };
    case COMPLETED_APPOINTMENTS_ID:
      return {
        ...state,
        completedAppointmentsById: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
