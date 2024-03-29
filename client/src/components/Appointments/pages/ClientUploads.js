import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { appointmentId } from "../../../redux/actions/appointment-actions";
import { connect } from "react-redux";
import AdminCancelConfirm from "../modals/AdminCancelConfirm";

const ClientUploads = ({ dispatch, getAppointmentById }) => {
  const nav = useNavigate();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    dispatch(appointmentId(id));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = () => {
    setShowCancelModal(true);
  };

  const handleComplete = () => {
    axiosWithAuth()
      .delete(`/api/appointments/completed/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    nav("/appointments");
  };

  return (
    <>
      {showCancelModal && (
        <AdminCancelConfirm
          showCancelModal={showCancelModal}
          setShowCancelModal={setShowCancelModal}
        />
      )}
      <div className='desktop:w-full pb-24'>
        <div className='desktop:flex flex-col'>
          {getAppointmentById.map((appointmentId, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center w-full pb-6 desktop:py-12'
              >
                {appointmentId.images ? (
                  <div className='w-[92%] h-96 border border-pink-900 flex justify-center items-center desktop:w-[55%] dark:border-neutral-900'>
                    <img
                      className='w-full border h-full desktop:w-full'
                      alt=''
                      src={appointmentId.images}
                    />
                  </div>
                ) : (
                  <div className='w-[92%] h-96 border border-pink-900 text-pink-900 dark:text-neutral-100 flex justify-center items-center dark:bg-neutral-700 desktop:w-[55%] dark:border-neutral-900'>
                    <p>No images uploaded</p>
                  </div>
                )}
                <p className='ml-2 my-6 text-pink-900 dark:text-neutral-100'>
                  {appointmentId.client_details === ""
                    ? "No Additional Details"
                    : appointmentId.client_details}
                </p>
              </div>
            );
          })}
          <div className='flex justify-evenly my-6 ml-2 desktop:justify-center gap-12'>
            <button
              onClick={handleDelete}
              className='w-20 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500 text-sm shadow-sm rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
            >
              Cancel
            </button>
            <button
              onClick={handleComplete}
              className='w-20 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500 text-sm  shadow-sm rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(ClientUploads);
