import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../../redux/actions/appointment-actions';
import { connect } from 'react-redux';

const ConfirmLoad = ({ dispatch, fetchAppointments }) => {
  const nav = useNavigate();

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  setTimeout(() => {
    nav(
      `/confirm/${
        fetchAppointments[fetchAppointments.length - 1].appointment_id
      }`
    );
  }, 3000);
  console.log(fetchAppointments);

  return (
    <div className='flex justify-center items-center w-full h-96'>
      Loading...
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(ConfirmLoad);
