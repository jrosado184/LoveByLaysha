import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteAppointments,
  appointmentId,
} from "../../redux/actions/appointment-actions";
import { connect } from "react-redux";
const Uploads = ({ dispatch, getAppointmentById }) => {
  const nav = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(appointmentId(id));
    console.log(getAppointmentById);
  }, []);

  const handleDelete = () => {
    dispatch(deleteAppointments(id));
    nav("/appointments");
  };
  return (
    <div className="desktop:w-full">
      <div className="desktop:flex flex-col items-start justify-start h-full">
        {getAppointmentById.map((appointmentId) => {
          return (
            <div className="flex flex-col items-center justify-center w-full pb-6 desktop:py-12">
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
        <div className="sm:flex justify-evenly w-full h-fit my-6 ml-2 desktop:justify-center gap-12">
          <button
            onClick={handleDelete}
            className="w-24 h-10 mr-6 bg-red-500 text-white shadow-sm rounded-sm"
          >
            Remove
          </button>
          <button className="w-24 h-10 mr-6 bg-green-600 text-white shadow-sm rounded-sm">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(Uploads);
