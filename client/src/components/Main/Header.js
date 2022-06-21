import React from 'react';
import laysha from '../../assets/laysha.jpg';
import user from '../../assets/user.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedOut } from '../../redux/actions/login_actions';
import { LogoutIcon, LoginIcon } from '@heroicons/react/outline';

const Header = ({ dispatch }) => {
  const handleLogOut = () => {
    dispatch(loggedOut());
  };

  return (
    <>
      <div className='bg-pink-200 w-full h-16 shadow-md sticky top-0 z-20 dark:bg-neutral-900 desktop:h-48 desktop:static'>
        <div className='w-full py-[1.4%] flex desktop:block'>
          {localStorage.getItem('token') ? (
            <div className='flex'>
              <img
                className='user-image ml-2 w-11 h-11 rounded-full border-2 border-white desktop:w-32 desktop:h-32 desktop:ml-9'
                src={user}
                alt=''
              />
            </div>
          ) : (
            <img
              className='user-image ml-2 w-14 h-12 my-1 rounded-full border-2 border-white desktop:w-32 desktop:h-32 desktop:ml-14'
              src={laysha}
              alt=''
            />
          )}
          <div className='pl-2 py-2 text-2xl flex justify-between items-center w-full desktop:pl-10 desktop:py-0'>
            <p className='font-light pl-2 text-pink-900 dark:text-neutral-100'>
              {localStorage.getItem('message') || 'LoveByLaysha'}
            </p>
            <nav className='w-6 mr-4 desktop:hidden'>
              {localStorage.getItem('token') ? (
                <Link onClick={handleLogOut} to='/'>
                  <LogoutIcon
                    className='text-pink-900 dark:text-neutral-100'
                    strokeWidth='1.3'
                  />
                </Link>
              ) : (
                <Link to='/login'>
                  <LoginIcon
                    className='text-pink-900 dark:text-neutral-100'
                    strokeWidth='1.3'
                  />
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
      <div
        className={
          localStorage.getItem('token')
            ? 'hidden desktop:flex bg-pink-200 border-b border-pink-500 text-md w-full gap-1 items-end justify-end pr-[3.4%] py-2 sm:pr-0 md:pr-4 dark:bg-neutral-900 dark:border-neutral-900'
            : 'hidden desktop:flex bg-pink-200 border-b border-pink-500 text-md w-full gap-1 items-end justify-end xr:pr-[2.6%] py-2 md:pr-4 dark:bg-neutral-900 dark:border-neutral-900'
        }
      >
        <nav className='hidden desktop:flex ml-2 text-1xl border-2 text-center bg-white rounded-full border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center dark:bg-neutral-600 dark:border-neutral-900'>
          <Link className='text-pink-900 dark:text-neutral-100' to='/'>
            Nailfies
          </Link>
        </nav>
        <nav
          className={
            !localStorage.getItem('token')
              ? 'hidden desktop:flex text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center dark:bg-neutral-600 dark:border-neutral-900'
              : 'hidden'
          }
        >
          <Link className='text-pink-900 dark:text-neutral-100' to='book'>
            Book
          </Link>
        </nav>
        <nav
          className={
            localStorage.getItem('token')
              ? 'hidden'
              : 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center dark:bg-neutral-600 dark:border-neutral-900'
          }
        >
          <Link className='text-pink-900 dark:text-neutral-100' to='policies'>
            Policies
          </Link>
        </nav>
        <nav
          className={
            localStorage.getItem('token')
              ? 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-24 h-[6%] items-center justify-center flex dark:bg-neutral-600 dark:border-neutral-900'
              : 'hidden'
          }
        >
          <Link className='text-pink-900 dark:text-neutral-100' to='schedule'>
            Schedule
          </Link>
        </nav>
        <nav
          className={
            !localStorage.getItem('token')
              ? 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center dark:bg-neutral-600 dark:border-neutral-900'
              : 'hidden'
          }
        >
          <Link className='text-pink-900 dark:text-neutral-100' to='contact'>
            Contact
          </Link>
        </nav>
        <nav
          className={
            localStorage.getItem('token')
              ? 'hidden desktop:flex h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 w- h-[6%] pl-2 pr-2 items-center justify-center dark:bg-neutral-600 dark:border-neutral-900'
              : 'hidden'
          }
        >
          <Link
            className='text-pink-900 dark:text-neutral-100'
            to='appointments'
          >
            Appointments
          </Link>
        </nav>
        <nav className='hidden desktop:block h-[6%] text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center flex dark:bg-neutral-600 dark:border-neutral-900'>
          {localStorage.getItem('token') ? (
            <Link
              className='text-pink-900 dark:text-neutral-100'
              onClick={handleLogOut}
              to='/'
            >
              Logout
            </Link>
          ) : (
            <Link className='text-pink-900 dark:text-neutral-100' to='/login'>
              Login
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    login: {
      logout: state.login.logout,
    },
  };
};

export default connect(mapStateToProps)(Header);
