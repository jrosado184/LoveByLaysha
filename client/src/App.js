import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nails from "./components/Nails";
import Book from "./components/Book";
import Register from "./components/Register";
import Login from "./components/Login";
import AppointmentList from "./components/AppointmentList";
import Appointment from "./components/Appointment";
import Confirm from "./components/Confirm";
import Contact from "./components/Contact";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Nails />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/book" element={<Book />} />
        <Route path="/confirm/:id" element={<Confirm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment/:id" element={<Appointment />} />
        <Route
          path="/appointments"
          element={
            <PrivateRoute>
              <AppointmentList />
            </PrivateRoute>
          }
        />
        {/* <Route path="/appointment/:id" element={<Appointment />} /> */}
      </Routes>
    </>
  );
};

export default App;
