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
      <div className="flex bg-pink-200 w-100 h-62 shadow-md flex flex-col">
        <div className="flex">
          <img
            className="ml-6 my-2 w-44 h-44 rounded-full border-4 border-white"
            src={laysha}
            alt=""
          />
          <h2
            className={
              localStorage.getItem("token")
                ? "hidden"
                : "mr-24 my-6 font-girl text-2xl w-2"
            }
          >
            LoveByLaysha
          </h2>
        </div>
        <div className="ml-10 text-2xl w-96 font-girl">
          {localStorage.getItem("message")}
        </div>
        <div
          className={
            localStorage.getItem("token")
              ? "sm:flex my-3 text-md w-90 gap-1 items-end justify-end mr-[4.5%] grow"
              : "sm:flex my-3 text-md w-100 gap-1 items-end justify-end mr-[2.6%]"
          }
        >
          <nav className="h-6 text-1xl border-2 text-center bg-white rounded-full border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center flex">
            <Link to="nails">Nailfies</Link>
          </nav>
          <nav
            className={
              !localStorage.getItem("token")
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 h-[6%] items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to="book">Book</Link>
          </nav>
          <nav className="h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center flex">
            <Link to="policies">Policies</Link>
          </nav>
          <nav
            className={
              !localStorage.getItem("token")
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 pl-3 pr-3 w-20 h-[6%] items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to="contact">Contact</Link>
          </nav>
          <nav
            className={
              localStorage.getItem("token")
                ? "h-6 text-1xl border-2 rounded-full text-center bg-white border-pink-300 w- h-[6%] pl-2 pr-2 items-center justify-center flex"
                : "hidden"
            }
          >
            <Link to="appointments">Appointments</Link>
          </nav>
          <nav className="text-1xl border-2 rounded-full text-center bg-white border-pink-300 w-20 h-[6%] pl-3 pr-3 items-center justify-center flex">
            {!localStorage.getItem("token") ? (
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
      logout: state.login.logout,
    },
  };
};

export default connect(mapStateToProps)(Header);
