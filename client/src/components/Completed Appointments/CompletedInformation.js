import React, { useEffect, useState } from 'react';
import { getCompletedAppointmentsById } from '../../redux/actions/appointment-actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import date from '../../assets/calendar.svg';
import person from '../../assets/person.svg';
import set from '../../assets/set.svg';
import time from '../../assets/time.svg';
import soak from '../../assets/soak.svg';
import phone from '../../assets/phone.svg';
import refill from '../../assets/refill.svg';
import Phone from '../../Algos/Phone';
import { Months } from '../../Algos/Months';
import AppointmentSkeleton from '../Appointments/AppointmentSkeleton';

const CompletedInformation = ({ dispatch, completedAppointmentsById }) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCompletedAppointmentsById(id));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [id]);

  return (
    <>
      {loading ? (
        <AppointmentSkeleton />
      ) : (
        completedAppointmentsById.map((appointment) => {
          return (
            <div
              key={appointment.appointment_id}
              className='sm:w-full h-100 py-6 flex flex-col desktop:ml-6'
            >
              <div className='sm:w-full flex justify-evenly desktop:w-[100%] justify-start gap-8 py-4'>
                <div className='sm:flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-9' src={date} alt='' />
                  <p className='font-semibold py-4 py-4 text-pink-900'>{`${Months(
                    appointment.appointment_month
                  )} ${appointment.appointment_day}, ${
                    appointment.appointment_year
                  }`}</p>
                </div>
                <div className='sm:flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-9' src={time} alt='' />
                  <p className='font-semibold py-4 text-pink-900'>
                    {appointment.appointment_time}
                  </p>
                </div>
              </div>
              <div className='sm:w-full flex justify-evenly desktop:w-[100%] justify-start gap-8 py-4'>
                <div className='sm:flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-9' src={person} alt='' />
                  <p className='font-semibold py-4 text-pink-900'>
                    {appointment.client_name}
                  </p>
                </div>
                <div className='sm:flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-9' src={phone} alt='' />
                  <p className='font-semibold py-4 text-pink-900'>
                    {Phone(appointment.client_phone)}
                  </p>
                </div>
              </div>
              <div className='sm:w-full flex justify-evenly desktop:w-[100%] justify-start gap-8 py-4'>
                <div className='sm:flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-9 h-fit' src={soak} alt='' />
                  <p className='font-semibold py-4 text-pink-900'>
                    {String(appointment.client_Soak) === 'true'
                      ? 'Soak Off'
                      : 'No Soak Off'}
                  </p>
                </div>
                <div className='sm:flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-12 h-fit' src={set} alt='' />
                  <p className='font-semibold py-4 text-pink-900'>
                    {appointment.client_set === 'none'
                      ? 'No New Set'
                      : appointment.client_set}
                  </p>
                </div>
              </div>
              <div className='sm:shadow-lg w-full flex justify-evenly desktop:w-[100%] justify-start gap-8 py-4'>
                <div className='sm:shadow-lg flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-9 h-fit' src={refill} alt='' />
                  <p className='font-semibold py-4 text-pink-900'>
                    {String(appointment.client_refill) === 'true'
                      ? 'Refill'
                      : 'No Refill'}
                  </p>
                </div>
                <div className='sm:shadow-lg flex flex-col justify-center items-center w-40 h-full border 2 border-pink-900 rounded-md md:w-60 h-40 desktop:w-1/2'>
                  <img className='w-12 h-fit' src={set} alt='' />
                  <p className='font-semibold py-4 text-pink-900'>
                    {String(appointment.client_refillSet) === 'none'
                      ? 'No Refill Set'
                      : appointment.client_refillSet}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    completedAppointmentsById: state.appointments.completedAppointmentsById,
  };
};

export default connect(mapStateToProps)(CompletedInformation);
