import React, { useState } from 'react';
import { handleLogin, login } from '../../redux/actions/login_actions';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {
  const { dispatch } = props;

  const nav = useNavigate();

  const [login, setLogin] = useState({
    username: '',
    password: '',
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
    nav('/nails');
  };
  return (
    <div className='h-96 flex flex-col items-center justify-center'>
      <p className='font-bold my-2 text-pink-900'>FOR ADMIN USE ONLY</p>
      <form
        onSubmit={handleSubmit}
        className=' w-96 my-4 flex flex-col items-center justify-center'
      >
        <input
          className='sm:pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md'
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
          className='w-20 h-8 my-3 border-2 border-pink-300 bg-pink-100 text-pink-600 rounded-full cursor-pointer'
          type='submit'
        />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    login: {
      loggedIn: state.login.loggedIn,
    },
  };
};

export default connect(mapStateToProps)(Login);
