import React, { useState } from "react";
import laysha from "../assets/laysha.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loggedOut } from "../redux/actions/API_CALLS";

const Header = ({ login, dispatch, logIn }) => {
  const handleLogOut = () => {
    dispatch(loggedOut());
  };
  return (
    <>
      <div className="flex bg-pink-200 w-100 h-62 shadow-md">
        <div>
          <img
            className="ml-24 w-44 h-44 rounded-full border-4 border-white"
            src={laysha}
            alt=""
          />
          <h1
            className={
              login.loggedIn
                ? "font-girl font-bold ml-20 my-2 text-white border-2 border-pink-200 rounded-full w-fit p-2"
                : "hidden"
            }
          >
            {login.message}
          </h1>
          <div
            className={
              login.loggedIn
                ? "sm:flex my-3 font-girl w-80 gap-[.5%]"
                : "flex my-3 font-girl w-80 gap-1 ml-2"
            }
          >
            <nav className="h-6 text-1xl border-2 text-center bg-white rounded-full border-pink-300 ml-1 pl-2 pr-2 h-[6%] items-center justify-center flex">
              <Link to="nails">Nailfies</Link>
            </nav>
            <nav className="h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-2 pr-2 h-[6%] items-center justify-center flex">
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
              <Link to="policies">Contact</Link>
            </nav>
            <nav
              className={
                login.loggedIn
                  ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 w-28 h-[6%] pl-2 pr-2 items-center justify-center flex"
                  : "hidden"
              }
            >
              <Link to="policies">Dashboard</Link>
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
