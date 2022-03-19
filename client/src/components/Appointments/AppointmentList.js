import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getAppointments } from "../../redux/actions/appointment-actions";
import Appointments from "./Appointments";
import Search from "./Search";

const AppointmentList = ({ dispatch, fetchAppointments }) => {
  useEffect(() => {
    dispatch(getAppointments());
  });

  return (
    <>
      <Search />
      <div className="flex flex-col items-center my-2">
        {fetchAppointments
          .sort((a, b) => a.appointment_day - b.appointment_day)
          .map((appointment) => (
            <Appointments
              key={appointment.appointment_id}
              appointment={appointment}
            />
          ))}
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
