import React, { useState } from "react";
import { handleLogin } from "../redux/actions/API_CALLS";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Login = (props) => {
  console.log(props);
  const { dispatch } = props;
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
    dispatch(handleLogin(login));
    console.log(login);
  };
  return (
    <div>
      <p className='font-bold ml-28 my-2'>FOR ADMIN USE ONLY</p>{" "}
      <form onSubmit={handleSubmit} className='flex flex-col items-center my-4'>
        <input
          className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md'
          type='text'
          placeholder='Username'
          name='username'
          value={login.username}
          onChange={handleChange}
        />
        <input
          className='my-3 pl-3 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md'
          type='password'
          placeholder='Password'
          name='password'
          value={login.password}
          onChange={handleChange}
        />
        <input
          className='w-20 h-8 my-3 border-2 border-pink-300 bg-pink-100 text-pink-300 rounded-full'
          type='submit'
        />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    login: {
      message: state.message,
    },
  };
};

export default connect(mapStateToProps)(Login);
