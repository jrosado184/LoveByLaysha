import React, { useState } from "react";
import laysha from "../assets/laysha.jpg";
import { Link } from "react-router-dom";

const Header = ({ loggedIn, setIsLoggedIn }) => {
  const handleLogOut = () => {
    setIsLoggedIn(localStorage.removeItem("token"));
  };
  return (
    <div className='flex bg-pink-200 w-100 h-60 shadow-md'>
      <div className='my-4'>
        <img
          className='ml-24 w-44 h-44 rounded-full border-4 border-white'
          src={laysha}
          alt=''
        />
        <div
          className={
            loggedIn
              ? "sm:flex my-3 font-girl w-80 gap-[.5%]"
              : "flex my-3 font-girl w-80 gap-1 ml-2"
          }
        >
          <nav className='h-6 text-1xl border-2 text-center bg-white rounded-full border-pink-300 ml-1 pl-2 pr-2 h-[6%] items-center justify-center flex'>
            <Link to='nails'>Nailfies</Link>
          </nav>
          <nav className='h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-2 pr-2 h-[6%] items-center justify-center flex'>
            <Link to='book'>Book?</Link>
          </nav>
          <nav className='h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-1 pr-1 w-20 h-[6%] items-center justify-center flex'>
            <Link to='policies'>Policies</Link>
          </nav>
          <nav
            className={
              !loggedIn
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-2 pr-2 w-20 h-[6%] items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to='policies'>Contact</Link>
          </nav>
          <nav
            className={
              loggedIn
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 w-28 h-[6%] pl-2 pr-2 items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to='policies'>Dashboard</Link>
          </nav>
          <nav className='text-1xl border-2 rounded-full text-center bg-white border-pink-300 w-20 h-[6%] pl-2 pr-2 items-center justify-center flex'>
            {!loggedIn ? (
              <Link to='login'>Admin</Link>
            ) : (
              <Link onClick={handleLogOut} to='/'>
                Logout
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
