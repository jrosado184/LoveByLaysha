import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Register = () => {
  /*NOT FOR USER USE AT THE MOMENT */

  const [register, setRegister] = useState({
    user_name: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('https://lovebylaysha.herokuapp.com/api/users/register', register)
      .then((user) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center my-4'>
        <input
          className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md'
          type='text'
          placeholder='Full Name'
          name='user_name'
          value={register.user_name}
          onChange={handleChange}
        />
        <input
          className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md'
          type='text'
          placeholder='Username'
          name='username'
          value={register.username}
          onChange={handleChange}
        />
        <input
          className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md'
          type='password'
          placeholder='Password'
          name='password'
          value={register.password}
          onChange={handleChange}
        />
        <input
          className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md'
          type='text'
          placeholder='Confirm Password'
        />
        <input
          className='w-20 h-8 my-3 border-2 border-pink-300 bg-pink-100 text-pink-300 rounded-full'
          type='submit'
        />
      </form>
    </div>
  );
};

export default Register;
