import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';

const CancelConfirm = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  return (
    <div className='w-full h-[84.54vh] flex flex-col justify-center items-center desktop:justify-center'>
      <p className='font-bold my-6 dark:text-neutral-100'>
        Appointment Canceled
      </p>
      <div className='flex gap-10 justify-center w-full'></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(CancelConfirm);
