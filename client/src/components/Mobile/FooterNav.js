import React from 'react';
import plus from './../../assets/plus.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Book } from './../../assets/icons/book.svg';
import { ReactComponent as Clipboard } from './../../assets/icons/clipboard.svg';
import { ReactComponent as Contact } from './../../assets/icons/mail.svg';
import { ReactComponent as Schedule } from './../../assets/icons/calendar.svg';
import { ReactComponent as Appointments } from './../../assets/icons/appointments.svg';
import { ReactComponent as Notes } from './../../assets/icons/notes.svg';
import { connect } from 'react-redux';

const FooterNav = ({ setImage, onNailComp, darkMode }) => {
  return (
    <div className='flex h-16 py-8  justify-evenly items-center bg-pink-200 w-full border-y border-pink-300 dark:bg-neutral-900 dark:border-neutral-900 desktop:hidden'>
      <Link to='/'>
        <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
          <Home
            className={
              darkMode
                ? 'w-7 h-fit text-neutral-100'
                : 'w-7 h-fit text-pink-900'
            }
          />
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
          <Book
            className={
              darkMode
                ? 'w-7 h-fit text-neutral-100'
                : 'w-7 h-fit text-pink-900'
            }
          />
          <p className='text-xs text-pink-900 dark:text-neutral-100'>Book</p>
        </Link>
      </div>
      {!localStorage.getItem('token') ? (
        <Link to='/policies'>
          <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
            <Clipboard
              className={
                darkMode
                  ? 'w-7 h-fit text-neutral-100'
                  : 'w-7 h-fit text-pink-900'
              }
            />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Policies
            </p>
          </div>
        </Link>
      ) : (
        <Link to='/schedule'>
          <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
            <Schedule
              className={
                darkMode
                  ? 'w-7 h-fit text-neutral-100'
                  : 'w-7 h-fit text-pink-900'
              }
            />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Schedule
            </p>
          </div>
        </Link>
      )}
      {onNailComp && (
        <div className='w-9 h-fit mb-5 bg-pink-300 border border-white rounded-full dark:bg-neutral-600'>
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
            <Appointments
              className={
                darkMode
                  ? 'w-7 h-fit text-neutral-100'
                  : 'w-7 h-fit text-pink-900'
              }
            />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Appointments
            </p>
          </div>
        </Link>
      )}
      {!localStorage.getItem('token') && (
        <Link to='/contact'>
          <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 '>
            <Contact
              className={
                darkMode
                  ? 'w-7 h-fit text-neutral-100'
                  : 'w-7 h-fit text-pink-900'
              }
            />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>
              Contact
            </p>
          </div>
        </Link>
      )}
      {localStorage.getItem('token') && (
        <Link to='/settings'>
          <div className='w-22 h-fit flex flex-col items-center justify-center mb-4'>
            <Notes
              className={
                darkMode
                  ? 'w-7 h-fit text-neutral-100'
                  : 'w-7 h-fit text-pink-900'
              }
            />
            <p className='text-xs text-pink-900 dark:text-neutral-100'>Notes</p>
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
