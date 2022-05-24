import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getAppointments } from '../../redux/actions/appointment-actions';
import Appointments from './Appointments';
import Search from './Search';
import { sortDates } from '../../Algos/Sorting';
import AppointmentsSkeleton from './AppointmentsSkeleton';

const AppointmentList = ({ dispatch, fetchAppointments }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAppointments());
    sortDates();
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
      <Search />
      <div className='flex flex-col items-center my-2'>
        {loading ? (
          <AppointmentsSkeleton card={fetchAppointments.length} />
        ) : (
          fetchAppointments.map((appointment, index) => (
            <Appointments key={index} appointment={appointment} />
          ))
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
