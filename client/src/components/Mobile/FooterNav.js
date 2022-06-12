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
    <div className='flex h-16 py-8  justify-evenly items-center bg-pink-200 w-full border-y border-pink-300 dark:bg-neutral-900	dark:border-neutral-900	 desktop:hidden'>
      <Link to='/nails'>
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          <img className='w-7 h-fit' src={home} alt='' />
          <p className='text-xs text-pink-900 dark:text-neutral-100'>Home</p>
        </div>
      </Link>
      <div
        className={
          !localStorage.getItem('token')
            ? 'w-9 h-fit flex flex-col items-center justify-center mb-4'
            : 'hidden'
        }
      >
        <Link to='/book'>
          <img className='w-7 h-fit' src={book} alt='' />
          <p className='text-xs text-pink-900 dark:text-neutral-100'>Book</p>
        </Link>
      </div>
      {!localStorage.getItem('token') ? (
        <Link to='/policies'>
          <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
            <img className='w-7 h-fit' src={clipboard} alt='' />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Policies
            </p>
          </div>
        </Link>
      ) : (
        <Link to='/schedule'>
          <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
            <img className='w-7 h-fit' src={schedule} alt='' />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Schedule
            </p>
          </div>
        </Link>
      )}
      {onNailComp && (
        <div className='w-9 h-fit mb-5  bg-pink-300 border border-white rounded-full'>
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
        <Link to='/appointments'>
          <div className='w-9 h-fit flex flex-col items-center justify-center mb-4'>
            <img src={appointments} className='w-7 h-fit' alt='' />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Appointments
            </p>
          </div>
        </Link>
      )}
      {!localStorage.getItem('token') && (
        <Link to='/contact'>
          <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
            <img className='w-7 h-fit' src={contact} alt='' />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Contact
            </p>
          </div>
        </Link>
      )}
      {localStorage.getItem('token') && (
        <Link to='/settings'>
          <div className='w-22 h-fit flex flex-col items-center justify-center mb-4'>
            <img className='w-7 h-fit' src={settings} alt='' />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Settings
            </p>
          </div>
        </Link>
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
