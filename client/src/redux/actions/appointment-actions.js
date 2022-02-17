import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCH_APPOINTMENTS = "FETCH_APPOINTMENTS";

export const addAppointments = (info) => {
  return { type: FETCH_APPOINTMENTS, payload: info };
};

export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";

export const receiveAppointments = (appointments) => {
  return { type: RECEIVE_APPOINTMENTS, payload: appointments };
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

export const handleAppointments = (info) => {
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
