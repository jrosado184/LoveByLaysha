import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getAppointments } from '../../redux/actions/appointment-actions';
import Appointments from './Appointments';
import Search from './Search';
import { sortDates } from '../../Algos/Sorting';

const AppointmentList = ({ dispatch, fetchAppointments }) => {
  useEffect(() => {
    dispatch(getAppointments());
    sortDates();
  }, []);
  return (
    <>
      <Search />
      <div className='flex flex-col items-center my-2'>
        {fetchAppointments.length ? (
          fetchAppointments.map((appointment) => (
            <Appointments
              key={appointment.appointment_id}
              appointment={appointment}
            />
          ))
        ) : (
          <div>
            <p className='h-60 flex items-center'>No appointments available</p>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(AppointmentList);
