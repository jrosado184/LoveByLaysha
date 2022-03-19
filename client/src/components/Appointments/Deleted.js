import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteAppointments } from "../../redux/actions/appointment-actions";

const Deleted = ({ deletedAppointments, dispatch }) => {
  useEffect(() => {
    dispatch(deleteAppointments());
  }, [dispatch]);

  return (
    <>
      {deletedAppointments.map((appointment) => {
        return (
          <div className="w-full flex justify-center items-center flex-col my-1 gap-8">
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
                <div className="w-full flex h-fit items-center justify-end my-6 ml-12 gap-2 mr-4">
                  <p className="flex">See Information</p>
                </div>
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
    deletedAppointments: state.appointments.deletedAppointments,
  };
};

export default connect(mapStateToProps)(Deleted);
