import React, { useEffect } from 'react';
import right from '../../assets/right.svg';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Months } from '../../Algos/Months';
import FooterNav from './../Mobile/FooterNav';
import { getAppointments } from './../../redux/actions/appointment-actions';

const Appointments = ({ appointment, index, dispatch }) => {
  const nav = useNavigate();

  const handleAppointment = () => {
    nav(`/appointment/${appointment.appointment_id}`);
  };

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  return (
    <div
      key={index}
      className='w-full flex justify-center items-center flex-col my-1 gap-8'
    >
      <div className='w-full h-24 border-2 border-gray-300 rounded-md flex flex-col shadow-md dark:border-neutral-900'>
        <div className='w-full flex justify-between'>
          <div className='h-fit'>
            <h1 className='ml-4 py-1 font-semibold text-pink-900 dark:text-neutral-100'>
              {appointment.client_name}
            </h1>
          </div>
          <p className='mr-6 py-1 text-pink-900 dark:text-neutral-100'>{`${Months(
            appointment.appointment_month
          )} ${appointment.appointment_day}, ${
            appointment.appointment_year
          }`}</p>
        </div>
        <div className='w-full pl-4 my-2 flex justify-between'>
          <p className='w-full text-pink-900 dark:text-neutral-100'>
            {appointment.appointment_time}
          </p>
          <div
            onClick={handleAppointment}
            className='cursor-pointer w-full flex h-fit items-center justify-end my-6 ml-12 gap-2 mr-4'
          >
            <p className='flex cursor-pointer text-pink-900 dark:text-neutral-100'>
              See Information
            </p>
            <img className='w-4' src={right} alt='' />
          </div>
        </div>
      </div>
      {localStorage.getItem('token') && (
        <div className='fixed bottom-0 w-full z-10 y-20'>
          <FooterNav />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(Appointments);
