import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

const Login = ({ loggedIn, setIsLoggedIn }) => {
  const nav = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://lovebylaysha.herokuapp.com/api/users/login", login)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(localStorage.getItem("token"));
        nav("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p className="font-bold ml-28 my-2">FOR ADMIN USE ONLY</p>{" "}
      <form onSubmit={handleSubmit} className="flex flex-col items-center my-4">
        <input
          className="pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md"
          type="text"
          placeholder="Username"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <input
          className="my-3 pl-3 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md"
          type="password"
          placeholder="Password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <input
          className="w-20 h-8 my-3 border-2 border-pink-300 bg-pink-100 text-pink-300 rounded-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Login;
