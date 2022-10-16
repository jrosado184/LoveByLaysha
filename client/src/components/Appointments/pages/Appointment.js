import React, { useEffect, useState } from 'react';
import { appointmentId } from '../../../redux/actions/appointment-actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ReactComponent as Calendar } from '../../../assets/calendar.svg';
import { ReactComponent as Person } from '../../../assets/person.svg';
import { ReactComponent as Set } from '../../../assets/set.svg';
import { ReactComponent as Time } from '../../../assets/time.svg';
import { ReactComponent as Soak } from '../../../assets/soak.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/phone.svg';
import { ReactComponent as Refill } from '../../../assets/refill.svg';
import Phone from '../../../Algos/Phone';
import { Months } from '../../../Algos/Months';
import ClientUploads from './ClientUploads';
import Loading from './Loading';

const Appointment = ({ dispatch, getAppointmentById }) => {
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    dispatch(appointmentId(id));
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='w-full h-[70vh] flex flex-col lg:flex-row'>
          <div className='w-full py-4'>
            {getAppointmentById.map((appointment, index) => {
              return (
                <div key={index} className='w-full flex flex-col desktop:ml-6'>
                  <div className='w-full flex justify-evenly desktop:w-[100%] desktop:justify-start py-1'>
                    <div className='flex flex-col justify-center items-center w-48 h-40 border 2 border-pink-900 rounded-md dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2'>
                      <Calendar className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>{`${Months(
                        appointment.appointment_month
                      )} ${appointment.appointment_day}, ${
                        appointment.appointment_year
                      }`}</p>
                    </div>
                    <div className='sm:flex flex-col justify-center items-center w-48 h-40 border 2 border-pink-900 rounded-md dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2 desktop:ml-6'>
                      <Time className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>
                        {appointment.appointment_time}
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-evenly desktop:w-[100%] py-1'>
                    <div className='sm:flex flex-col justify-center items-center w-48 h-40 border 2 border-pink-900 rounded-md dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2'>
                      <Person className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>
                        {appointment.client_name}
                      </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-48 border 2 border-pink-900 rounded-md h-40 dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2 desktop:ml-6'>
                      <PhoneIcon className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>
                        {Phone(appointment.client_phone)}
                      </p>
                    </div>
                  </div>
                  <div className='sm:w-full flex justify-evenly desktop:w-[100%] py-1'>
                    <div className='sm:flex flex-col justify-center items-center w-48 border 2 border-pink-900 rounded-md h-40 dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2'>
                      <Soak className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>
                        {String(appointment.client_Soak) === 'true'
                          ? 'Soak Off'
                          : 'No Soak Off'}
                      </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-48 border 2 border-pink-900 rounded-md h-40 dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2 desktop:ml-6'>
                      <Set className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>
                        {appointment.client_set === 'none'
                          ? 'No New Set'
                          : appointment.client_set}
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-evenly desktop:w-[100%] py-1'>
                    <div className='flex flex-col justify-center items-center w-48 border 2 border-pink-900 rounded-md h-40 dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2'>
                      <Refill className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>
                        {String(appointment.client_refill) === 'true'
                          ? 'Refill'
                          : 'No Refill'}
                      </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-48 border 2 border-pink-900 rounded-md h-40 dark:border-neutral-900 dark:bg-neutral-700 sm2:w-[45%] desktop:w-1/2 desktop:ml-6'>
                      <Set className='w-9 text-pink-900 dark:text-neutral-100' />
                      <p className='font-semibold py-4 text-pink-900 dark:text-neutral-100'>
                        {String(appointment.client_refillSet) === 'none'
                          ? 'No Refill Set'
                          : appointment.client_refillSet}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ClientUploads />
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
    deletedAppointments: state.appointments.deletedAppointments,
  };
};

export default connect(mapStateToProps)(Appointment);
