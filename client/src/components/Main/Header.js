import React from 'react';
import laysha from '../../assets/laysha.webp';
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
      <div className='bg-pink-200 w-full h-16 shadow-md sticky top-0 z-20 dark:bg-neutral-900 desktop:h-16'>
        <div className='w-full flex items-center h-16 desktop:h-13 desktop:items-center'>
          {localStorage.getItem('token') ? (
            <div className='flex'>
              <img
                className='user-image ml-2 w-11 h-11 rounded-full border-2 border-white desktop:w-11 desktop:h-11 desktop:ml-8'
                src={user}
                alt=''
              />
            </div>
          ) : (
            <div>
              <img
                className='user-image ml-2 w-11 h-11 rounded-full border-2 border-white desktop:w-11 desktop:h-11 desktop:ml-8'
                src={laysha}
                alt=''
              />
            </div>
          )}
          <div className='pl-2 py-2 text-2xl flex justify-between items-center w-full desktop:py-0'>
            {localStorage.getItem('message') ? (
              <p className='font-light pl-1 text-pink-900 dark:text-neutral-100'>
                {localStorage.getItem('message')}
              </p>
            ) : (
              <p className='font-light pl-1 text-pink-900 dark:text-neutral-100 desktop:pl-1'>
                LoveByLaysha
              </p>
            )}
            <div className='hidden desktop:flex h-16 items-end justify-between gap-20 '>
              <Link to='/'>
                <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 hover:border-b hover:border-white '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-pink-900 dark:text-neutral-100'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='.9'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                </div>
              </Link>
              <div
                className={
                  !localStorage.getItem('token')
                    ? 'w-9 h-fit flex flex-col items-center justify-center mb-4 hover:border-b hover:border-white'
                    : 'hidden'
                }
              >
                <Link to='/book'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-pink-900 dark:text-neutral-100'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='.9'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                    />
                  </svg>
                </Link>
              </div>
              {!localStorage.getItem('token') ? (
                <Link to='/policies'>
                  <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 hover:border-b hover:border-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 text-pink-900 dark:text-neutral-100'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='.9'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                      />
                    </svg>
                  </div>
                </Link>
              ) : (
                <Link to='/schedule'>
                  <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 hover:border-b hover:border-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 text-pink-900 dark:text-neutral-100'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='.9'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                </Link>
              )}
              {localStorage.getItem('token') && (
                <Link to='/appointments'>
                  <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 hover:border-b hover:border-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 text-pink-900 dark:text-neutral-100'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='.9'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                  </div>
                </Link>
              )}
              {!localStorage.getItem('token') && (
                <Link to='/contact'>
                  <div className='w-9 h-fit flex flex-col items-center justify-center mb-4 hover:border-b hover:border-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 text-pink-900 dark:text-neutral-100'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='.9'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                </Link>
              )}
              {localStorage.getItem('token') && (
                <Link to='/settings'>
                  <div className='w-22 h-fit flex flex-col items-center justify-center mb-4 hover:border-b hover:border-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 text-pink-900 dark:text-neutral-100'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='.9'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                      />
                    </svg>
                  </div>
                </Link>
              )}
            </div>
            <nav className='w-6 mr-4 desktop:w-8'>
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
