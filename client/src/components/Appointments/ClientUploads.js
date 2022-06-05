import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { appointmentId } from '../../redux/actions/appointment-actions';
import { connect } from 'react-redux';
import ClientUploadSkeleton from './ClientUploadsSkeleton';

const ClientUploads = ({ dispatch, getAppointmentById }) => {
  const nav = useNavigate();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(appointmentId(id));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/appointments/${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    nav('/appointments');
  };

  const handleComplete = () => {
    axiosWithAuth()
      .delete(`/api/appointments/completed/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    nav('/appointments');
  };

  return (
    <div className='desktop:w-full mb-12'>
      <div className='desktop:flex flex-col items-start justify-start h-full'>
        {loading ? (
          <ClientUploadSkeleton />
        ) : (
          getAppointmentById.map((appointmentId, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center w-full pb-6 desktop:py-12'
              >
                {appointmentId.images ? (
                  <img
                    className='sm:w-96 border-2 border-gray-400 desktop:w-[50%] h-96'
                    alt=''
                    src={appointmentId.images}
                  />
                ) : (
                  <p className='sm:flex justify-center items-center w-96 border-2 border-gray-400 desktop:w-[50%] h-96'>
                    No images uploaded
                  </p>
                )}
                <p className='ml-2 my-6'>
                  {appointmentId.client_details === ''
                    ? 'No Additional Details'
                    : appointmentId.client_details}
                </p>
              </div>
            );
          })
        )}
        <div className='sm:flex justify-evenly w-full h-fit my-6 ml-2 desktop:justify-center gap-12'>
          <button
            onClick={handleDelete}
            className='w-24 h-10 mr-6 bg-pink-200 border border-pink-500 text-pink-500 shadow-sm rounded-sm'
          >
            Remove
          </button>
          <button
            onClick={handleComplete}
            className='w-24 h-10 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-sm'
          >
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

export default connect(mapStateToProps)(ClientUploads);
