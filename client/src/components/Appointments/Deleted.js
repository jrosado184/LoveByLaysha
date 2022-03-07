import React from "react";
import { deletedAppointments } from "../../redux/actions/appointment-actions";
import { connect } from "react-redux";

const Deleted = (props) => {
  console.log(props);
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    deletedAppointments: state.appointments.deletedAppointments,
  };
};

export default connect(mapStateToProps)(Deleted);
