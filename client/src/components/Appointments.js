import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import right from "../assets/right.svg";
import { getAppointments } from "./../redux/actions/appointment-actions";
import search from "../assets/search.svg";

const Appointments = ({ dispatch, fetchAppointments }) => {
  const [showSearch, setShowSearch] = useState(false);
  const nav = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const handleAppointment = () => {
    nav(`/appointment/${id}`);
  };

  return (
    <div className="flex flex-col items-center my-2">
      <form className="h-8 flex items-center justify-end w-full my-2">
        <input
          className={
            showSearch
              ? "w-[100%] ml-2 border-2 border-pink-300 mr-2 h-9 pl-3 rounded-full"
              : "hidden"
          }
          placeholder="Search for a client"
        />
        <img
          onClick={() => setShowSearch(!showSearch)}
          className="w-6 mr-4"
          src={search}
          alt=""
        />
      </form>
      {fetchAppointments
        .sort((a, b) => (a.appointment_date >= b.appointment_date ? 1 : -1))
        .map((appointment) => (
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
                <p className="mr-4 py-1">{appointment.appointment_date}</p>
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
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Appointments);
