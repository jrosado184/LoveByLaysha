import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../../redux/actions/appointment-actions';
import { connect } from 'react-redux';
import Loading from './Loading';

const ConfirmLoad = ({ dispatch, fetchAppointments }) => {
  const nav = useNavigate();

  useEffect(() => {
    dispatch(getAppointments());
    setTimeout(() => {
      nav(
        `/confirm/${
          fetchAppointments[fetchAppointments.length - 1].appointment_id
        }`
      );
    }, 3000);
  }, []);

  return <Loading />;
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(ConfirmLoad);
