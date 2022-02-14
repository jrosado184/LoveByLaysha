import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCH_APPOINTMENTS = "FETCH_APPOINTMENTS";

export const fetchAppointments = (info) => {
  return { type: FETCH_APPOINTMENTS, payload: info };
};

export const handleAppointments = (info) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("/api/appointments", info)
      .then((res) => {
        console.log(res);
        dispatch(fetchAppointments(res));
      });
  };
};
