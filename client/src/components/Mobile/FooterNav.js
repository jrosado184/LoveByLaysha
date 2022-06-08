import React from 'react';
import plus from './../../assets/plus.svg';
import { Link } from 'react-router-dom';
import home from '../../assets/icons/home.svg';
import book from './../../assets/icons/book.svg';
import clipboard from './../../assets/icons/clipboard.svg';
import contact from './../../assets/icons/mail.svg';
import { connect } from 'react-redux';
import schedule from './../../assets/icons/calendar.svg';
import appointments from './../../assets/icons/appointments.svg';
import settings from './../../assets/icons/settings.svg';

const FooterNav = ({ setImage, onNailComp }) => {
  return (
    <div className='flex h-16 py-8  justify-evenly items-center bg-pink-200 w-full border-y border-pink-300 desktop:hidden'>
      <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
        <img className='w-7 h-fit' src={home} alt='' />
        <Link to='/nails'>
          <p className='text-xs text-pink-900'>Home</p>
        </Link>
      </div>
      <div
        className={
          !localStorage.getItem('token')
            ? 'w-9 h-fit flex flex-col items-center justify-center mb-4'
            : 'hidden'
        }
      >
        <img className='w-7 h-fit' src={book} alt='' />
        <Link to='/book'>
          <p className='text-xs text-pink-900'>Book</p>
        </Link>
      </div>
      {!localStorage.getItem('token') ? (
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          <img className='w-7 h-fit' src={clipboard} alt='' />
          <Link to='/policies'>
            <p className='text-xs text-pink-900'>Policies</p>
          </Link>
        </div>
      ) : (
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          <img className='w-7 h-fit' src={schedule} alt='' />
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
          <img src={appointments} className='w-7 h-fit' alt='' />
          <Link to='/appointments'>
            <p className='text-xs text-pink-900'>Appointments</p>
          </Link>
        </div>
      )}
      {!localStorage.getItem('token') && (
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          <img className='w-7 h-fit' src={contact} alt='' />
          <Link to='/contact'>
            <p className='text-xs text-pink-900'>Contact</p>
          </Link>
        </div>
      )}
      {localStorage.getItem('token') && (
        <div className='w-22 h-fit flex flex-col items-center justify-center mb-4'>
          <img className='w-7 h-fit' src={settings} alt='' />
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
