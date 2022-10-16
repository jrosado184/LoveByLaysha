import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCompletedAppointmentsById } from '../../../redux/actions/appointment-actions';
import { connect } from 'react-redux';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const Uploads = ({ dispatch, completedAppointmentsById }) => {
  const { id } = useParams();
  const nav = useNavigate();

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/completedAppointments/${id}`)
      .then(() => {
        nav('/completedAppointments');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getCompletedAppointmentsById());
  });
  return (
    <>
      <div className='desktop:w-full pb-24'>
        <div className='desktop:flex flex-col'>
          {completedAppointmentsById.map((appointmentId, index) => {
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
                  {appointmentId.client_details === ''
                    ? 'No Additional Details'
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
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    completedAppointmentsById: state.appointments.completedAppointmentsById,
  };
};

export default connect(mapStateToProps)(Uploads);
