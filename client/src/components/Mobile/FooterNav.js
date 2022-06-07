import React, { useState, useEffect } from 'react';
import plus from './../../assets/plus.svg';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  BookOpenIcon,
  BellIcon,
  CalendarIcon,
  UserIcon,
  MailIcon,
  CogIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';
import { connect } from 'react-redux';

const FooterNav = ({ setImage, onNailComp }) => {
  return (
    <div className='flex h-16 justify-evenly items-center bg-pink-200 w-full border-y border-pink-300 desktop:hidden'>
      <div className='w-9 h-full flex items-center justify-center pb-2 '>
        <Link to='/nails'>
          <HomeIcon className='w-9 h-fit' strokeWidth='.9' />
        </Link>
      </div>
      <div
        className={
          !localStorage.getItem('token')
            ? 'w-9 h-full flex items-center justify-center pb-2'
            : 'hidden'
        }
      >
        <Link to='/book'>
          <BookOpenIcon className='w-9 h-fit' strokeWidth='.9' />
        </Link>
      </div>
      <div className='w-9 h-full flex items-center justify-center pb-2'>
        {localStorage.getItem('token') ? (
          <Link to='/schedule'>
            <CalendarIcon className='w-9 h-fit' strokeWidth='.9' />
          </Link>
        ) : (
          <Link to='policies'>
            <ClipboardListIcon className='w-9' strokeWidth='.9' />
          </Link>
        )}
      </div>
      {onNailComp && (
        <div className='w-11 h-11 mb-2  bg-pink-300 border border-white rounded-full'>
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
        <div className='w-9 h-full flex items-center justify-center pb-2'>
          <Link to='/appointments'>
            <BellIcon className='w-9 h-fit' strokeWidth='.9' />
          </Link>
        </div>
      )}
      {!localStorage.getItem('token') && (
        <div className='w-9 h-full flex items-center justify-center pb-2'>
          <Link to='/appointments'>
            <MailIcon className='w-9 h-fit' strokeWidth='.9' />
          </Link>
        </div>
      )}
      <div className='w-9 h-full flex items-center justify-center pb-2'>
        {localStorage.getItem('token') ? (
          <Link to='/settings'>
            <CogIcon strokeWidth='.9' className='w-9 h-fit' />
          </Link>
        ) : (
          <Link to='/login'>
            <UserIcon className='w-9 h-fit' strokeWidth='.9' />
          </Link>
        )}
      </div>
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
