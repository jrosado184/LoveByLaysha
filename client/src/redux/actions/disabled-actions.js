import axiosWithAuth from "../../utils/axiosWithAuth";

export const GET_DISABLED_DAYS = "GET_DISABLED_DAYS";

export const getDisabledDays = () => {
  return { type: GET_DISABLED_DAYS };
};

export const fetchdisabledDays = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get("/api/disabledDays")
      .then((res) => {
        dispatch(getDisabledDays(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
