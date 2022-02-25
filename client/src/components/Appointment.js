import React, { useEffect } from "react";
import { appointmentId } from "../redux/actions/appointment-actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Appointment = ({ dispatch, getAppointmentById }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(appointmentId(id));
  });
  return (
    <div>
      {getAppointmentById.map((appointment) => {
        return (
          <div key={appointment.appointment_id}>
            <h1>Date: {appointment.appointment_date}</h1>
            <p>Time: {appointment.appointment_time}</p>
            <p>Name: {appointment.client_name}</p>
            <p>Phone: {appointment.client_phone}</p>
            <p>Set: {appointment.client_set}</p>
            <p>Refill: {String(appointment.client_Soak)}</p>
            <p>Refill Set: {appointment.client_refillSet}</p>
            <p>Soak Off: {String(appointment.client_Soak)}</p>
            <p>Details: {appointment.client_details}</p>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(Appointment);
