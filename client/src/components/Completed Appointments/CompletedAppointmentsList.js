import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getCompletedAppointments } from '../../redux/actions/appointment-actions';
import Completed from './Completed';
import Search from '../Appointments/Search';

const CompletedAppointmentsList = ({ dispatch, completedAppointments }) => {
  useEffect(() => {
    dispatch(getCompletedAppointments());
  }, [dispatch]);

  return (
    <>
      <Search />
      <div className='flex flex-col items-center my-2'>
        {completedAppointments.length ? (
          completedAppointments
            .sort((a, b) => a.appointment_day - b.appointment_day)
            .map((appointment) => (
              <Completed
                key={appointment.appointment_id}
                appointment={appointment}
              />
            ))
        ) : (
          <div className='w-full h-72 flex justify-center items-center'>
            <p>No completed appointments</p>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    completedAppointments: state.appointments.completedAppointments,
  };
};

export default connect(mapStateToProps)(CompletedAppointmentsList);
