import React, { useEffect } from "react";
import { appointmentId } from "../../redux/actions/appointment-actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import date from "../../assets/calendar.svg";
import person from "../../assets/person.svg";
import set from "../../assets/set.svg";
import time from "../../assets/time.svg";
import details from "../../assets/details.svg";
import soak from "../../assets/soak.svg";
import phone from "../../assets/phone.svg";
import refill from "../../assets/refill.svg";
import Phone from "../../Algos/Phone";

const Appointment = ({ dispatch, getAppointmentById }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(appointmentId(id));
  });
  return (
    <>
      {getAppointmentById.map((appointment) => {
        return (
          <div className="w-full h-screen py-6 flex flex-col">
            <div className="flex justify-evenly">
              <div className="flex flex-col justify-center items-center w-40 h-full border 2 border-black rounded-md">
                <img className="w-9" src={date} alt="" />
                <p className="font-semibold py-4 py-4">{`${appointment.appointment_month} ${appointment.appointment_day},${appointment.appointment_year}`}</p>
              </div>
              <div className="flex flex-col items-center justify-center w-40 border 2 border-black rounded-md p-3">
                <img className="w-9" src={time} alt="" />
                <p className="font-semibold py-4">
                  {appointment.appointment_time}
                </p>
              </div>
            </div>
            <div className="flex justify-evenly py-6">
              <div className="flex flex-col items-center justify-center w-40 border 2 border-black rounded-md p-3">
                <img className="w-9" src={person} alt="" />
                <p className="font-semibold py-4">{appointment.client_name}</p>
              </div>
              <div className="flex flex-col items-center justify-center w-40 border 2 border-black rounded-md p-3">
                <img className="w-9" src={phone} alt="" />
                <p className="font-semibold py-4">
                  {Phone(appointment.client_phone)}
                </p>
              </div>
            </div>
            <div className="flex justify-evenly py-6">
              <div className="flex flex-col items-center justify-center w-40 border 2 border-black rounded-md p-3">
                <img className="w-9 h-fit" src={soak} alt="" />
                <p className="font-semibold py-4">
                  {String(appointment.client_Soak) === "true"
                    ? "Soak Off"
                    : "No Soak Off"}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-40 border 2 border-black rounded-md p-3">
                <img className="w-12 h-fit" src={set} alt="" />
                <p className="font-semibold py-4">
                  {appointment.client_set === "none"
                    ? "No New Set"
                    : appointment.client_set}
                </p>
              </div>
            </div>
            <div className="flex justify-evenly py-6 shadow-lg">
              <div className="flex flex-col items-center justify-center w-40 border 2 border-black rounded-md p-3">
                <img className="w-9 h-fit" src={refill} alt="" />
                <p className="font-semibold py-4">
                  {String(appointment.client_refill) === "true"
                    ? "Refill"
                    : "No Refill"}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-40 border 2 border-black rounded-md p-3">
                <img className="w-12 h-fit" src={set} alt="" />
                <p className="font-semibold py-4">
                  {String(appointment.client_refillSet) === "none"
                    ? "No Refill Set"
                    : appointment.client_refillSet}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start h-full">
              <div className="flex flex-col items-center justify-center w-full pb-1=6 py-6">
                <img className="border-1 border-black w-96 h-80" alt="" />
              </div>
              <div className="pb-6 flex ml-2 flex items-center">
                <img className="w-9" src={details} alt="" />
                <p className="ml-2">
                  {appointment.client_details === ""
                    ? "No Additional Details"
                    : appointment.client_details}
                </p>
              </div>
              <div className="flex justify-between items-center w-full h-fit my-6 ml-2">
                <button className="w-24 h-10 mr-6 bg-red-500 text-white shadow-sm rounded-sm">
                  Remove
                </button>
                <button className="w-24 h-10 mr-6 bg-green-600 text-white shadow-sm rounded-sm">
                  Complete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(Appointment);
