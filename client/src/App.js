import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nails from "./components/Nails";
import Book from "./components/Book";
import Register from "./components/Register";
import Login from "./components/Login";
import Appointments from "./components/Appointments";
import Appointment from "./components/Appointment";

import { connect } from "react-redux";

const App = ({ login }) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Nails />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/book" element={<Book />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    login: {
      loggedIn: state.login.loggedIn,
    },
  };
};

export default connect(mapStateToProps)(App);
