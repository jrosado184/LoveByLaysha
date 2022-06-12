import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import check from './../../assets/check.svg';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';
import edit from './../../assets/edit.svg';
import CancelModal from './CancelModal';
import { Months } from '../../Algos/Months';
import Loading from './../Appointments/Loading';

const Confirm = ({ dispatch, fetchAppointments }) => {
  const nav = useNavigate();

  const { id } = useParams();

  const [cancelModal, setCancelModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleEdit = () => {
    nav(`/edit/${id}`);
  };
  const fil = fetchAppointments.filter(
    (elem) => elem === fetchAppointments[fetchAppointments.length - 1]
  );

  useEffect(() => {
    dispatch(getAppointments());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {cancelModal && (
        <CancelModal
          cancelModal={cancelModal}
          setCancelModal={setCancelModal}
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col items-center justify-start h-[90vh] py-12 desktop:justify-start desktop:h-[75.3vh]'>
          {fil.map((item) => {
            return (
              <div
                key={item.appointment_id}
                className='flex flex-col items-center'
              >
                <h1 className='text-3xl text-center my-6 dark:text-neutral-100'>
                  {`Thank you for booking ${item.client_name}!`}
                </h1>
                <img
                  className='w-12 border-2 border-green-500 rounded-full'
                  src={check}
                  alt=''
                />
                <p className='font-semibold dark:text-neutral-100'>
                  Your appointment is confirmed:
                </p>
                <p className='font-bold underline dark:text-neutral-100'>{`For ${Months(
                  item.appointment_month
                )} ${item.appointment_day}, ${item.appointment_year} at ${
                  item.appointment_time
                }`}</p>
                <div className='flex justify-evenly w-full h-12 items-end my-8 '>
                  <div className='flex w-12 items-center underline'>
                    <button
                      onClick={handleEdit}
                      className='w-16 h-7 text-sm dark:text-neutral-100'
                    >
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
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Confirm);
