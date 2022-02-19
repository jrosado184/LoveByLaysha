import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import right from "../assets/right.svg";
import { getAppointments } from "./../redux/actions/appointment-actions";

const Appointments = ({ dispatch, allAppointments }) => {
  const nav = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const handleAppointment = () => {
    nav(`/appointment/${id}`);
  };

  return (
    <>
      {allAppointments.map((appointment) => (
        <div
          key={appointment.appointment_id}
          className="flex justify-center items-center flex-col my-1 gap-8"
        >
          <div className="w-[95%] h-24 border-2 border-gray-300 rounded-md flex flex-col shadow-md">
            <div className="w-full flex justify-between">
              <div className="h-fit">
                <h1 className="ml-4 py-1 font-semibold">
                  {appointment.client_name}
                </h1>
              </div>
              <p className="mr-4 py-1">{appointment.appointment_date}</p>
            </div>
            <div className="w-full pl-4 my-2 flex justify-between">
              <p className="w-full">{appointment.appointment_time}</p>
              <div
                onClick={handleAppointment}
                className="w-full flex h-fit items-center justify-center my-6 ml-12 gap-2"
              >
                <p>See Information</p>
                <img className="w-4" src={right} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allAppointments: state.appointments.allAppointments,
  };
};

export default connect(mapStateToProps)(Appointments);
