import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCompletedAppointmentsById } from '../../redux/actions/appointment-actions';
import { connect } from 'react-redux';
import axiosWithAuth from '../../utils/axiosWithAuth';

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
    <div className='desktop:w-full mb-24'>
      <div className='desktop:flex flex-col items-start justify-start h-full'>
        {completedAppointmentsById.map((appointmentId, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center w-full pb-6 desktop:py-12'
            >
              {appointmentId.images ? (
                <img
                  className='sm:w-96 border-2 border-pink-900 rounded-md desktop:w-[50%] h-96 dark:border-neutral-900'
                  alt=''
                  src={appointmentId.images}
                />
              ) : (
                <p className='sm:flex justify-center items-center w-96 border border-pink-900 text-pink-900 rounded-md desktop:w-[50%] h-96 dark:border-neutral-900 dark:text-neutral-100'>
                  No images uploaded
                </p>
              )}
              <p className='ml-2 my-6 text-pink-900 dark:text-neutral-100'>
                {appointmentId.client_details === ''
                  ? 'No Additional Details'
                  : appointmentId.client_details}
              </p>
            </div>
          );
        })}
        <div className='flex justify-evenly w-full h-fit my-6 desktop:justify-center gap-12'>
          <button
            onClick={handleDelete}
            className='w-20 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500 shadow-sm rounded-full dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-100'
          >
            Delete
          </button>
        </div>
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
