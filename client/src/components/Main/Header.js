import React from "react";
import laysha from "../../assets/laysha.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loggedOut } from "../../redux/actions/login_actions";

const Header = ({ dispatch }) => {
  const handleLogOut = () => {
    dispatch(loggedOut());
  };

  return (
    <>
      <div className='flex bg-pink-200 w-full h-62 shadow-md flex flex-col'>
        <div className='w-full'>
          <img
            className='sm:ml-6 my-2 w-44 h-44 rounded-full border-4 border-white md:w-44'
            src={laysha}
            alt=''
          />
          <div className='pl-14 text-2xl w-full'>
            <p className='font-light'>{localStorage.getItem("message")}</p>
          </div>
        </div>
      </div>
      <div
        className={
          localStorage.getItem("token")
            ? "sm:bg-pink-200 flex text-md w-full gap-1 items-end justify-end pr-[5%] py-4 md:pr-4"
            : "sm:bg-pink-200 flex text-md w-full gap-1 items-end justify-end pr-[2.6%] py-4 md:pr-4"
        }
      >
        <nav className='ml-2 h-6 text-1xl border-2 text-center bg-white rounded-full border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center flex'>
          <Link to='nails'>Nailfies</Link>
        </nav>
        <nav
          className={
            !localStorage.getItem("token")
              ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center flex"
              : "hidden"
          }
        >
          <Link to='book'>Book</Link>
        </nav>
        <nav className='h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center flex'>
          <Link to='policies'>Policies</Link>
        </nav>
        <nav
          className={
            !localStorage.getItem("token")
              ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center flex"
              : "hidden"
          }
        >
          <Link to='contact'>Contact</Link>
        </nav>
        <nav
          className={
            localStorage.getItem("token")
              ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 w- h-[6%] pl-2 pr-2 items-center justify-center flex"
              : "hidden"
          }
        >
          <Link to='appointments'>Appointments</Link>
        </nav>
        <nav className='text-1xl border-2 rounded-full text-center bg-white border-pink-300 w-20 h-[6%] pl-3 pr-3 items-center justify-center flex'>
          {!localStorage.getItem("token") ? (
            <Link to='login'>Admin</Link>
          ) : (
            <Link onClick={handleLogOut} to='/'>
              Logout
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
