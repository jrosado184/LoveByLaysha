import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import check from './../../assets/check.svg';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';
import { ReactComponent as Edit } from './../../assets/edit.svg';
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
    <div className='h-[85.6vh] desktop:pb-[44.4%]'>
      {cancelModal && (
        <CancelModal
          cancelModal={cancelModal}
          setCancelModal={setCancelModal}
        />
      )}
      {loading ? (
        <div className='h-[90vh]'>
          <Loading />
        </div>
      ) : (
        <div className='flex flex-col items-center h-96 justify-end my-10 desktop:justify-start'>
          {fil.map((item) => {
            return (
              <div
                key={item.appointment_id}
                className='flex flex-col items-center'
              >
                <h1 className='text-2xl text-center my-6 text-pink-900 dark:text-neutral-100 desktop:text-4xl'>
                  {`Thank you for booking ${item.client_name}!`}
                </h1>
                <img
                  className='w-12 border-2 border-green-500 rounded-full'
                  src={check}
                  alt=''
                />
                <p className='font-semibold text-pink-900 dark:text-neutral-100 desktop:text-1xl'>
                  Your appointment is confirmed:
                </p>
                <p className='font-bold underline text-pink-900 dark:text-neutral-100 desktop:text-2xl'>{`For ${Months(
                  item.appointment_month
                )} ${item.appointment_day}, ${item.appointment_year} at ${
                  item.appointment_time
                }`}</p>
                <div className='flex justify-evenly w-full h-12 items-end my-8 '>
                  <div className='flex w-12 items-center underline'>
                    <button
                      onClick={handleEdit}
                      className='w-16 h-7 text-sm text-pink-900 dark:text-neutral-100'
                    >
                      Edit
                    </button>
                    <Edit className='w-9 h-9 text-pink-900 dark:text-neutral-100' />
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Confirm);
