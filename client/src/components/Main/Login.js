import React, { useState } from 'react';
import { handleLogin } from '../../redux/actions/login_actions';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = ({ dispatch }) => {
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
    <div className='h-[90vh] pb-96 flex flex-col items-center justify-center'>
      <p className='font-bold text-pink-900 dark:dark:text-neutral-100'>
        FOR ADMIN USE ONLY
      </p>
      <form
        onSubmit={handleSubmit}
        className=' w-96 my-4 flex flex-col items-center justify-center'
      >
        <input
          className='sm:pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md dark:border-neutral-800 dark:bg-neutral-700 dark:placeholder:text-neutral-100'
          type='text'
          placeholder='Username'
          name='username'
          value={login.username}
          onChange={handleChange}
        />
        <input
          className='my-3 pl-3 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md dark:dark:border-neutral-800 dark:bg-neutral-700 dark:placeholder:text-neutral-100'
          type='password'
          placeholder='Password'
          name='password'
          value={login.password}
          onChange={handleChange}
        />
        <input
          className='w-20 h-8 my-3 border-2 border-pink-300 bg-pink-100 text-pink-600 rounded-full cursor-pointer dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
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
