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
    }, 500);
  }, []);

  return (
    <div className='h-[90vh] pb-6 desktop:pb-[47.2%]'>
      <Search />
      <div className='flex flex-col items-center my-2'>
        {loading ? (
          <AppointmentsSkeleton card={fetchAppointments.length} />
        ) : fetchAppointments.length ? (
          fetchAppointments.map((appointment, index) => (
            <Appointments key={index} appointment={appointment} />
          ))
        ) : (
          <div className='w-full h-96 flex justify-center items-center my-24 dark:text-neutral-100'>
            No Appointments Scheduled
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(AppointmentList);
