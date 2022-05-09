import NailData from '../data/NailData';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import plus from './../../assets/plus.svg';
import axios from 'axios';

const Nails = (logIn) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [logIn]);

  axios.get('https://lovebylaysha.herokuapp.com/').then((res) => {
    console.log(res);
  });

  return (
    <div className='w-full h-full flex flex-wrap justify-center gap-6 py-2'>
      {NailData.map((nailData) => {
        return (
          <img
            key={nailData}
            className='sm:w-[45%] h-72 my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full'
            src={nailData}
            alt=''
          />
        );
      })}
      {token && (
        <label className='w-[50%] h-72 flex flex-col items-center justify-center my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full cursor-pointer'>
          <div className='flex flex-col items-center justify-center'>
            <img className='w-20' src={plus} alt='plus' />
            Upload Image
            <input type='file' className='custom-file-input' />
          </div>
        </label>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logIn: {
      loggedIn: state.login.loggedIn,
    },
  };
};

export default connect(mapStateToProps)(Nails);
