import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../../../redux/actions/appointment-actions';
import { connect } from 'react-redux';
import Loading from './Loading';

const ConfirmLoad = ({ dispatch, fetchAppointments }) => {
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    dispatch(getAppointments());
    setTimeout(() => {
      nav(
        `/confirm/${
          fetchAppointments[fetchAppointments.length - 1].appointment_id
        }`
      );
      setLoading(false);
    }, 1000);
  }, [fetchAppointments]);

  return loading && <Loading />;
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(ConfirmLoad);
