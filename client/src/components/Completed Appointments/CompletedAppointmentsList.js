import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getCompletedAppointments } from '../../redux/actions/appointment-actions';
import Completed from './Completed';
import Search from '../Appointments/Search';
import AppointmentsSkeleton from '../Appointments/AppointmentsSkeleton';

const CompletedAppointmentsList = ({ dispatch, completedAppointments }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCompletedAppointments());
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, [dispatch]);

  return (
    <>
      <Search />
      <div className='flex flex-col items-center my-2'>
        {loading ? (
          <AppointmentsSkeleton card={completedAppointments.length} />
        ) : (
          completedAppointments.map((appointment) => (
            <Completed
              key={appointment.appointment_id}
              appointment={appointment}
            />
          ))
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
