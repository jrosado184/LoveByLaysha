import React from "react";
import laysha from "../assets/laysha.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loggedOut } from "../redux/actions/login_actions";

const Header = ({ login, dispatch }) => {
  const handleLogOut = () => {
    dispatch(loggedOut());
  };
  return (
    <>
      <div className="flex bg-pink-200 w-100 h-62 shadow-md flex flex-col">
        <div className="flex w-full">
          <img
            className="ml-6 my-2 w-44 h-44 rounded-full border-4 border-white"
            src={laysha}
            alt=""
          />
          <h2
            className={
              login.loggedIn ? "hidden" : "mr-24 my-6 font-girl text-2xl w-2"
            }
          >
            LoveByLaysha
          </h2>
        </div>
        <div
          className={login.loggedIn ? "font-girl ml-6 text-2xl w-96" : "hidden"}
        >
          {login.message}
        </div>
        <div
          className={
            login.loggedIn
              ? "sm:flex my-3 font-girl w-90 gap-1 items-center justify-center"
              : "flex my-3 font-girl w-100 gap-1 items-center justify-center"
          }
        >
          <nav className="h-6 text-1xl border-2 text-center bg-white rounded-full border-pink-300 pl-2 pr-2 h-[6%] items-center justify-center flex">
            <Link to="nails">Nailfies</Link>
          </nav>
          <nav
            className={
              !login.loggedIn
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-2 pr-2 h-[6%] items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to="book">Book?</Link>
          </nav>
          <nav className="h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-1 pr-1 w-20 h-[6%] items-center justify-center flex">
            <Link to="policies">Policies</Link>
          </nav>
          <nav
            className={
              !login.loggedIn
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-2 pr-2 w-20 h-[6%] items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to="contact">Contact</Link>
          </nav>
          <nav
            className={
              login.loggedIn
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 w- h-[6%] pl-2 pr-2 items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to="appointments">Appointments</Link>
          </nav>
          <nav className="text-1xl border-2 rounded-full text-center bg-white border-pink-300 w-20 h-[6%] pl-2 pr-2 items-center justify-center flex">
            {!login.loggedIn ? (
              <Link to="login">Admin</Link>
            ) : (
              <Link onClick={handleLogOut} to="/">
                Logout
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    login: {
      message: state.login.message,
      loggedIn: state.loggedIn,
      logout: state.logout,
    },
  };
};

export default connect(mapStateToProps)(Header);
