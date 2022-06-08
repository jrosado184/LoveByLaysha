import React, { useState, useEffect } from 'react';
import plus from './../../assets/plus.svg';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  BookOpenIcon,
  BellIcon,
  CalendarIcon,
  MailIcon,
  CogIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';
import { connect } from 'react-redux';

const FooterNav = ({ setImage, onNailComp }) => {
  return (
    <div className='flex h-16 py-8  justify-evenly items-center bg-pink-200 w-full border-y border-pink-300 desktop:hidden'>
      <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
        <Link to='/nails'>
          <HomeIcon className='w-7 h-fit text-pink-900' strokeWidth='.9' />
        </Link>
        <p className='text-sm text-pink-900'>Home</p>
      </div>
      <div
        className={
          !localStorage.getItem('token')
            ? 'w-9 h-fit flex flex-col items-center justify-center mb-4'
            : 'hidden'
        }
      >
        {/* <BookOpenIcon className='w-7 h-fit text-pink-900' strokeWidth='.9' /> */}
        <Link to='/book'>
          <p className='text-xs text-pink-900'>Book</p>
        </Link>
      </div>
      {!localStorage.getItem('token') ? (
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          {/* <ClipboardListIcon
            className='w-7 h-fit text-pink-900'
            strokeWidth='.9'
          /> */}
          <Link to='/policies'>
            <p className='text-xs text-pink-900'>Policies</p>
          </Link>
        </div>
      ) : (
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          {/* <CalendarIcon className='w-7 h-fit text-pink-900' strokeWidth='.9' /> */}
          <Link to='/schedule'>
            <p className='text-xs text-pink-900'>Schedule</p>
          </Link>
        </div>
      )}
      {onNailComp && (
        <div className='w-11 h-11 mb-3  bg-pink-300 border border-white rounded-full'>
          <label
            className='cursor-pointer'
            onClick={(e) => setImage(e.target.files[0])}
          >
            <img src={plus} alt='' />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type='file'
              className='custom-file-input'
            />
          </label>
        </div>
      )}
      {localStorage.getItem('token') && (
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4'>
          {/* <BellIcon className='w-7 h-fit text-pink-900' strokeWidth='.9' /> */}
          <Link to='/appointments'>
            <p className='text-xs text-pink-900'>Appointments</p>
          </Link>
        </div>
      )}
      {!localStorage.getItem('token') && (
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          {/* <MailIcon className='w-7 h-fit text-pink-900' strokeWidth='.9' /> */}
          <Link to='/contact'>
            <p className='text-xs text-pink-900'>Contact</p>
          </Link>
        </div>
      )}
      {localStorage.getItem('token') && (
        <div className='w-22 h-fit flex flex-col items-center justify-center mb-4'>
          {/* <CogIcon strokeWidth='.9' className='w-7 h-fit text-pink-900' /> */}
          <Link to='/settings'>
            <p className='text-xs text-pink-900'>Settings</p>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: {
      logout: state.login.logout,
    },
  };
};

export default connect(mapStateToProps)(FooterNav);
