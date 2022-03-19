import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import right from "../../assets/right.svg";

const Completed = ({ dispatch, appointment }) => {
  const nav = useNavigate();
  const handleAppointment = () => {
    nav(`/completed-information/${appointment.appointment_id}`);
  };

  return (
    <>
      <div
        key={appointment.appointment_id}
        className="w-full flex justify-center items-center flex-col my-1 gap-8"
      >
        <div className="w-full h-24 border-2 border-gray-300 rounded-md flex flex-col shadow-md">
          <div className="w-full flex justify-between">
            <div className="h-fit">
              <h1 className="ml-4 py-1 font-semibold">
                {appointment.client_name}
              </h1>
            </div>
            <p className="mr-6 py-1">{`${appointment.appointment_month} ${appointment.appointment_day},${appointment.appointment_year}`}</p>
          </div>
          <div className="w-full pl-4 my-2 flex justify-between">
            <p className="w-full">{appointment.appointment_time}</p>
            <div
              onClick={handleAppointment}
              className="w-full flex h-fit items-center justify-end my-6 ml-12 gap-2 mr-4"
            >
              <p className="flex">See Information</p>
              <img className="w-4" src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    completedAppointments: state.appointments.completedAppointments,
  };
};

export default connect(mapStateToProps)(Completed);
