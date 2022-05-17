import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import check from './../../assets/check.svg';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';
import edit from './../../assets/edit.svg';
import CancelModal from './CancelModal';

const Confirm = ({ dispatch, fetchAppointments }) => {
  const nav = useNavigate();

  const { id } = useParams();

  const [cancelModal, setCancelModal] = useState(false);

  const handleEdit = () => {
    nav(`/edit/${id}`);
  };
  const fil = fetchAppointments.filter(
    (elem) => elem === fetchAppointments[fetchAppointments.length - 1]
  );

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  return (
    <>
      {cancelModal && (
        <CancelModal
          cancelModal={cancelModal}
          setCancelModal={setCancelModal}
        />
      )}
      <div className='flex flex-col items-center justify-center my-10'>
        {fil.map((item) => {
          return (
            <div
              key={item.appointment_id}
              className='flex flex-col items-center'
            >
              <h1 className='text-3xl text-center my-6'>
                {`Thank you for booking ${item.client_name}!`}
              </h1>
              <img
                className='w-12 border-2 border-green-500 rounded-full'
                src={check}
                alt=''
              />
              <p className='font-semibold'>Your appointment is confirmed:</p>
              <p className='font-bold underline'>{`For ${item.appointment_month} ${item.appointment_day}, ${item.appointment_year} at ${item.appointment_time}`}</p>
              <div className='flex justify-evenly w-full h-12 items-end my-8 '>
                <div className='flex w-12 items-center underline'>
                  <button onClick={handleEdit} className='w-16 h-7 text-sm'>
                    Edit
                  </button>
                  <img className='w-4 h-4' src={edit} alt='' />
                </div>
                <button
                  onClick={() => setCancelModal(!cancelModal)}
                  className='w-16 h-7 text-sm text-red-500 underline'
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Confirm);
