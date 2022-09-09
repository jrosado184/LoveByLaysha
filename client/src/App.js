import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Main/Header/Header";
import Book from "./components/Booking/Book";
import Register from "./components/Main/Register";
import Login from "./components/Main/Login";
import AppointmentList from "./components/Appointments/pages/AppointmentList";
import Appointment from "./components/Appointments/pages/Appointment";
import ClientUploads from "./components/Appointments/pages/ClientUploads";
import Confirm from "./components/Appointments/pages/Confirm";
import Schedule from "./components/Schedule/Schedule";
import Contact from "./components/Main/Contact";
import PrivateRoute from "./utils/PrivateRoute";
import Nails from "./components/Nails/pages/Nails";
import CompletedAppointmentsList from "./components/Completed Appointments/pages/CompletedAppointmentsList";
import CompletedInformation from "./components/Completed Appointments/pages/CompletedInformation";
import CompletedUploads from "./components/Completed Appointments/pages/CompletedUploads";
import Policies from "./components/Main/Policies";
import Edit from "./components/Appointments/pages/Edit";
import ConfirmLoad from "./components/Appointments/pages/ConfirmLoad";
import CancelConfirm from "./components/Appointments/pages/CancelConfirm";
import FooterNav from "./components/Mobile/FooterNav";
import Notes from "./components/Mobile/Notes";
import Loading from "./components/Appointments/pages/Loading";
import Reschedule from "./components/Booking/Reschedule";
import "react-loading-skeleton/dist/skeleton.css";
import RescheduleInfo from "./components/Booking/RescheduleInfo";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.style.backgroundColor = localStorage.getItem("color");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : null}>
      <div className='h-full dark:bg-neutral-800'>
        <Header />
        <div className='fixed bottom-0 w-full z-20'>
          <FooterNav darkMode={darkMode} />
        </div>
        <Routes>
          <Route
            path='/'
            element={<Nails darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path='/book' element={<Book />} />
          <Route path='/reschedule' element={<Reschedule />} />
          <Route path='/reschedule-info/:id' element={<RescheduleInfo />} />
          <Route path='/confirm/:id' element={<Confirm />} />
          <Route path='/loading-confirm' element={<ConfirmLoad />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/policies' element={<Policies />} />
          <Route path='/canceled' element={<CancelConfirm />} />
          <Route
            path='/appointment/:id'
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          />
          <Route
            path='/completedAppointments'
            element={
              <PrivateRoute>
                <CompletedAppointmentsList />
              </PrivateRoute>
            }
          />
          <Route
            path='/settings'
            element={
              <PrivateRoute>
                <Notes darkMode={darkMode} setDarkMode={setDarkMode} />
              </PrivateRoute>
            }
          />
          <Route
            path='/completed-information/:id'
            element={
              <div className='sm:w-full flex flex-col desktop:flex-row'>
                <PrivateRoute>
                  <CompletedInformation />
                  <CompletedUploads />
                </PrivateRoute>
              </div>
            }
          />
          <Route
            path='/appointments'
            element={
              <PrivateRoute>
                <AppointmentList />
              </PrivateRoute>
            }
          />
          <Route
            path='/schedule'
            element={
              <PrivateRoute>
                <Schedule />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
