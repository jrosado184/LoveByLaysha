import axiosWithAuth from "../../utils/axiosWithAuth";
export const LOGIN = "LOGIN";

export const login = (info) => {
  return { action: LOGIN, payload: info };
};

export const handleLogin = () => {
  return (dispatch) => {
    axiosWithAuth()
      .post("https://lovebylaysha.herokuapp.com/api/users/login")
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data.message));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
