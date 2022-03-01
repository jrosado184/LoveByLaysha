import React, { useEffect } from "react";
import { appointmentId } from "../redux/actions/appointment-actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import date from "../assets/calendar.svg";
import person from "../assets/person.svg";
import set from "../assets/set.svg";
import time from "../assets/time.svg";
import details from "../assets/details.svg";
import soak from "../assets/soak.svg";
import phone from "../assets/phone.svg";
import refill from "../assets/refill.svg";

const Appointment = ({ dispatch, getAppointmentById }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(appointmentId(id));
  });
  return (
    <div className="ml-2 py-6">
      {getAppointmentById.map((appointment) => {
        return (
          <div className="flex flex-col" key={appointment.appointment_id}>
            <div>
              <div className="flex items-end">
                <img className="w-6" src={date} alt="" />
                <h1 className="ml-2">{appointment.appointment_date}</h1>
              </div>
              <div className="flex my-6">
                <img className="w-6" src={time} alt="" />
                <p>{appointment.appointment_time}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="bg-gray-500 w-96" />
            </div>
            <div className="flex items-end my-6">
              <img className="w-6" src={person} alt="" />
              <p> {appointment.client_name}</p>
            </div>
            <div className="flex my-4">
              <img className="w-6" src={phone} alt="" />
              <p>{appointment.client_phone}</p>
            </div>
            <div className="flex justify-center">
              <hr className="bg-gray-500 w-96" />
            </div>
            <div className="flex items-end my-6">
              <img className="w-8" src={set} alt="" />
              <p> {appointment.client_set}</p>
            </div>
            <div className="flex justify-center">
              <hr className="bg-gray-500 w-96" />
            </div>
            <div className="flex items-end my-6">
              <img className="w-6" src={refill} alt="" />
              <p>Refill: {String(appointment.client_refill)}</p>
            </div>
            <div className="flex my-6">
              <img className="w-8" src={set} alt="" />
              <p>Refill Set: {appointment.client_refillSet}</p>
            </div>
            <div className="flex justify-center">
              <hr className="bg-gray-500 w-96" />
            </div>
            <div className="flex items-end my-6">
              <img className="w-6" src={soak} alt="" />
              <p>Soak Off: {String(appointment.client_Soak)}</p>
            </div>
            <div className="flex justify-center">
              <hr className="bg-gray-500 w-96" />
            </div>
            <div className="flex items-end my-6">
              <img className="w-6" src={details} alt="" />
              <p>Details: {appointment.client_details}</p>
            </div>
            <div className="flex justify-center">
              <hr className="bg-gray-500 w-96" />
            </div>
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
