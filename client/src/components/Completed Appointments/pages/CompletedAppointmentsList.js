import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { getCompletedAppointments } from "../../../redux/actions/appointment-actions";
import Completed from "./Completed";
import Search from "../../Appointments/Search";
import Loading from "../../Appointments/pages/Loading";

const CompletedAppointmentsList = ({ dispatch, completedAppointments }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCompletedAppointments());
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch]);

  return (
    <div className='h-[85.55vh] desktop:pb-6'>
      <Search />
      <div className='flex flex-col items-center my-2 pb-16 '>
        {loading ? (
          <Loading />
        ) : (
          completedAppointments.map((appointment) => (
            <Completed
              key={appointment.appointment_id}
              appointment={appointment}
            />
          ))
        )}
        {!completedAppointments.length && (
          <p className='w-full h-[70vh] flex justify-center items-center text-pink-900 dark:text-neutral-100'>
            No Completed Appointments
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    completedAppointments: state.appointments.completedAppointments,
  };
};

export default connect(mapStateToProps)(CompletedAppointmentsList);
