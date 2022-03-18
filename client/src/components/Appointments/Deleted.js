import React from "react";
import { connect } from "react-redux";

const Deleted = ({ deletedAppointments }) => {
  console.log(deletedAppointments);
  return <></>;
};

const mapStateToProps = (state) => {
  return {
    deletedAppointments: state.appointments.deletedAppointments,
  };
};

export default connect(mapStateToProps)(Deleted);
