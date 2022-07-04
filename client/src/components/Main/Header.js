import React from 'react';
import laysha from '../../assets/laysha.webp';
import user from '../../assets/user.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedOut } from '../../redux/actions/login_actions';
import { LogoutIcon, LoginIcon } from '@heroicons/react/outline';
import FooterNav from '../Mobile/FooterNav';

const Header = ({ dispatch }) => {
  const handleLogOut = () => {
    dispatch(loggedOut());
  };

  return (
    <>
      <div className='bg-pink-200 w-full h-16 shadow-md sticky top-0 z-20 dark:bg-neutral-900 desktop:h-16 desktop:static'>
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
          <div className='pl-2 py-2 text-2xl flex justify-between items-end w-full desktop:py-0'>
            {localStorage.getItem('message') ? (
              <p className='font-light pl-1 text-pink-900 dark:text-neutral-100'>
                {localStorage.getItem('message')}
              </p>
            ) : (
              <p className='font-light pl-1 text-pink-900 dark:text-neutral-100 desktop:pl-1'>
                LoveByLaysha
              </p>
            )}
            <div className='flex'>
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
