import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { appointmentId } from '../../redux/actions/appointment-actions';
import { connect } from 'react-redux';

const AppointmentExtra = ({ dispatch, getAppointmentById }) => {
  const nav = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(appointmentId(id));
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
        {getAppointmentById.map((appointmentId) => {
          return (
            <div
              key={appointmentId.appointment_id}
              className='flex flex-col items-center justify-center w-full pb-6 desktop:py-12'
            >
              <img
                className='sm:w-80 border-2 border-gray-400 desktop:w-80 h-96'
                alt=''
                src={appointmentId.images}
              />
              <p className='ml-2 my-6 font-semibold'>
                {appointmentId.client_details === ''
                  ? 'No Additional Details'
                  : appointmentId.client_details}
              </p>
            </div>
          );
        })}
        <div className='sm:flex justify-evenly w-full h-fit my-6 ml-2 desktop:justify-center gap-12'>
          <button
            onClick={handleDelete}
            className='w-24 h-10 mr-6 bg-red-500 text-white shadow-sm rounded-sm'
          >
            Remove
          </button>
          <button
            onClick={handleComplete}
            className='w-24 h-10 mr-6 bg-green-600 text-white shadow-sm rounded-sm'
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

export default connect(mapStateToProps)(AppointmentExtra);