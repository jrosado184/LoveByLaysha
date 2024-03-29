import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAppointments } from "../../../redux/actions/appointment-actions";

const CancelConfirm = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  return (
    <div className='w-full h-[70.9vh] flex flex-col justify-center items-center desktop:justify-center desktop:h-[70vh]'>
      <p className='font-bold text-pink-900 dark:text-neutral-100'>
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
