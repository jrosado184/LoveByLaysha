import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const LOGIN = "LOGIN";
export const LOGGEDIN = "LOGGEDIN";
export const LOGOUT = "LOGOUT";

export const login = (info) => {
  return { type: LOGIN, payload: info };
};

export const loggedIn = () => {
  return { type: LOGGEDIN };
};

export const loggedOut = () => {
  return { type: LOGOUT };
};

export const handleLogin = (info) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("/api/users/login", info)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("message", res.data.message);
        dispatch(loggedIn());
        dispatch(login(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
