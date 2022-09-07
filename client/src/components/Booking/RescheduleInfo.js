import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { appointmentId } from '../../redux/actions/appointment-actions';
import { Months } from './../../Algos/Months';
import Phone from './../../Algos/Phone';

const RescheduleInfo = ({ getAppointmentById, dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(appointmentId(id));
  }, []);

  return (
    <div className='flex justify-center'>
      {getAppointmentById.map((appointment, index) => (
        <div className='my-6 text-1xl' key={index}>
          <div className='flex gap-1'>
            <p className='font-semibold'>Date:</p>
            <p>{`${Months(appointment.appointment_month)} ${
              appointment.appointment_day
            }, ${appointment.appointment_year}`}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Time:</p>
            <p>{appointment.appointment_time}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Name:</p>
            <p>{appointment.client_name}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Phone:</p>
            <p>{Phone(appointment.client_phone)}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Phone:</p>
            <p>{appointment.client_set}</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Refill:</p>
            <p>
              {String(appointment.client_refill) === 'true'
                ? 'Refill'
                : 'No Refill'}
            </p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Refill Set:</p>
            <p>
              {String(appointment.client_refillSet) === 'true'
                ? 'Refill'
                : 'No Refill Set'}
            </p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Soak Off:</p>
            <p>
              {String(appointment.client_Soak) === 'true'
                ? 'Soak Off'
                : 'No Soak Off'}
            </p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Details:</p>
            <p>
              {String(appointment.client_details) === ''
                ? 'No Additional Details'
                : appointment.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(RescheduleInfo);
