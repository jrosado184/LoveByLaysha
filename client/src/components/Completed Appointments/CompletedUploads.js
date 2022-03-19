import React, { useEffect } from "react";
import { getCompletedAppointmentsById } from "../../redux/actions/appointment-actions";
import { connect } from "react-redux";

const Uploads = ({ dispatch, completedAppointmentsById }) => {
  useEffect(() => {
    dispatch(getCompletedAppointmentsById());
  });
  return (
    <div className="desktop:w-full mb-12">
      <div className="desktop:flex flex-col items-start justify-start h-full">
        {completedAppointmentsById.map((appointmentId) => {
          return (
            <div
              key={appointmentId.appointment_id}
              className="flex flex-col items-center justify-center w-full pb-6 desktop:py-12"
            >
              <img
                className="sm:w-96 border-1 border-black desktop:w-[50%] h-96"
                alt=""
              />
              <p className="ml-2 my-6 font-semibold">
                {appointmentId.client_details === ""
                  ? "No Additional Details"
                  : appointmentId.client_details}
              </p>
            </div>
          );
        })}
        <div className="sm:flex justify-evenly w-full h-fit my-6 ml-2 desktop:justify-center gap-12"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    completedAppointmentsById: state.appointments.completedAppointmentsById,
  };
};

export default connect(mapStateToProps)(Uploads);
