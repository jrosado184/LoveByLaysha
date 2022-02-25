import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAppointments } from "../redux/actions/appointment-actions";
import search from "../assets/search.svg";
import Appointments from "./Appointments";

const AppointmentList = ({ dispatch, fetchAppointments }) => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

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
          <Appointments
            key={appointment.appointment_id}
            appointment={appointment}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(AppointmentList);
