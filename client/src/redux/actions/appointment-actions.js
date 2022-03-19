import axiosWithAuth from "../../utils/axiosWithAuth";

export const ADD_APPOINTMENTS = "ADD_APPOINTMENTS";

export const addAppointments = (info) => {
  return { type: ADD_APPOINTMENTS, payload: info };
};

export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";

export const receiveAppointments = (appointments) => {
  return { type: RECEIVE_APPOINTMENTS, payload: appointments };
};

export const GET_BY_ID = "GET_BY_ID";
export const getById = (id) => {
  return { type: GET_BY_ID, payload: id };
};

export const DELETED_APPOINTMENTS = "DELETED_APPOINTMENTS";
export const deletedAppointments = (appointments) => {
  return { type: DELETED_APPOINTMENTS, payload: appointments };
};

export const COMPLETED_APPOINTMENTS = "COMPLETED_APPOINTMENTS";

export const completedAppointments = (appointments) => {
  return { type: COMPLETED_APPOINTMENTS, payload: appointments };
};

export const COMPLETED_APPOINTMENTS_ID = "COMPLETED_APPOINTMENTS_ID";

export const completedAppointmentsById = (appointments) => {
  return { type: COMPLETED_APPOINTMENTS_ID, payload: appointments };
};

export const getAppointments = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get("/api/appointments")
      .then((res) => {
        dispatch(receiveAppointments(res.data));
      })
      .catch((err) => console.error(err));
  };
};

export const postAppointments = (info) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("/api/appointments", info)
      .then((res) => {
        dispatch(addAppointments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const appointmentId = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/api/appointments/${id}`)
      .then((res) => {
        dispatch(getById(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteAppointments = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/api/deletedAppointments`)
      .then((res) => {
        dispatch(deletedAppointments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getCompletedAppointments = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/api/completedAppointments`)
      .then((res) => {
        dispatch(completedAppointments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCompletedAppointmentsById = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/api/completedAppointments/${id}`)
      .then((res) => {
        dispatch(completedAppointmentsById(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
