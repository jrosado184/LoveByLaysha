import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Main/Header";
import Book from "./components/Appointments/Book";
import Register from "./components/Main/Register";
import Login from "./components/Main/Login";
import AppointmentList from "./components/Appointments/AppointmentList";
import Appointment from "./components/Appointments/Appointment";
import Uploads from "./components/Appointments/Uploads";
import Confirm from "./components/Appointments/Confirm";
import Contact from "./components/Main/Contact";
import Deleted from "./components/Appointments/Deleted";
import PrivateRoute from "./utils/PrivateRoute";
import Nails from "./components/Nails/Nails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/book" element={<Book />} />
        <Route path="/confirm/:id" element={<Confirm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/appointment/:id"
          element={
            <div className="sm:w-full flex flex-col desktop:flex-row">
              <Appointment />
              <Uploads />
            </div>
          }
        />
        <Route path="/deleted" element={<Deleted />} />
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
