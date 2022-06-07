import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Main/Header';
import Book from './components/Appointments/Book';
import Register from './components/Main/Register';
import Login from './components/Main/Login';
import AppointmentList from './components/Appointments/AppointmentList';
import Appointment from './components/Appointments/Appointment';
import ClientUploads from './components/Appointments/ClientUploads';
import Confirm from './components/Appointments/Confirm';
import Schedule from './components/Schedule/Schedule';
import Contact from './components/Main/Contact';
import PrivateRoute from './utils/PrivateRoute';
import Nails from './components/Nails/Nails';
import CompletedAppointmentsList from './components/Completed Appointments/CompletedAppointmentsList';
import CompletedInformation from './components/Completed Appointments/CompletedInformation';
import CompletedUploads from './components/Completed Appointments/CompletedUploads';
import Policies from './components/Main/Policies';
import Edit from './components/Appointments/Edit';
import ConfirmLoad from './components/Appointments/ConfirmLoad';
import CancelConfirm from './components/Appointments/CancelConfirm';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import FooterNav from './components/Mobile/FooterNav';
import Settings from './components/Mobile/Settings';

const App = () => {
  return (
    <>
      <SkeletonTheme baseColor='#C0C0C0' highlightColor='#D3D3D3'>
        <Header />
        <div className='fixed bottom-0 w-full z-10'>
          <FooterNav />
        </div>
        <Routes>
          <Route path='/' element={<Nails />} />
          <Route path='/nails' element={<Nails />} />
          <Route path='/book' element={<Book />} />
          <Route path='/confirm/:id' element={<Confirm />} />
          <Route path='/loading' element={<ConfirmLoad />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/policies' element={<Policies />} />
          <Route path='/canceled' element={<CancelConfirm />} />
          <Route
            path='/appointment/:id'
            element={
              <div className='w-full flex flex-col desktop:flex-row'>
                <PrivateRoute>
                  <Appointment />
                  <ClientUploads />
                </PrivateRoute>
              </div>
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
                <Settings />
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
      </SkeletonTheme>
    </>
  );
};

export default App;
