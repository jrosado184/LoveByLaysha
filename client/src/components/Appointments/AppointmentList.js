import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAppointments } from "../../redux/actions/appointment-actions";
import { useNavigate } from "react-router-dom";
import search from "../../assets/search.svg";
import Appointments from "./Appointments";

const AppointmentList = ({ dispatch, fetchAppointments }) => {
  const nav = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const handleRemoved = () => {
    nav("/deleted");
  };

  return (
    <div className="flex flex-col items-center my-2">
      <div className="flex w-full items-center">
        <div
          className={
            !showSearch
              ? "w-22 h-7 border-2 border-pink-200 rounded-full flex items-center ml-4 pl-2 pr-2"
              : "hidden"
          }
        >
          <p className="text-sm">Completed</p>
        </div>
        <div
          className={
            !showSearch
              ? "w-22 h-7 border-2 border-pink-200 rounded-full flex items-center ml-2 pl-2 pr-2"
              : "hidden"
          }
        >
          <p onClick={handleRemoved} className="text-sm">
            Removed
          </p>
        </div>
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
      </div>
      {fetchAppointments.map((appointment) => (
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
