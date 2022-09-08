import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { appointmentId } from "../../redux/actions/appointment-actions";
import { Months } from "./../../Algos/Months";
import check from "./../../assets/check.svg";
import Loading from "./../Appointments/pages/Loading";
import CancelModal from "../Appointments/modals/CancelModal";
import { ReactComponent as Edit } from "./../../assets/edit.svg";

const RescheduleInfo = ({ getAppointmentById, dispatch }) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [cancelModal, setCancelModal] = useState(false);

  const nav = useNavigate();

  const handleEdit = () => {
    nav(`/edit/${id}`);
  };

  useEffect(() => {
    dispatch(appointmentId(id));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='h-[89.2vh] desktop:pb-[44.4%]'>
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
          {getAppointmentById.map((item) => {
            return (
              <div
                key={item.appointment_id}
                className='flex flex-col items-center'
              >
                <h1 className='text-3xl text-center my-6 text-pink-900 dark:text-neutral-100 desktop:text-4xl'>
                  {`Thank you for booking ${item.client_name}!`}
                </h1>
                <img
                  className='w-12 border-2 border-green-500 rounded-full'
                  src={check}
                  alt=''
                />
                <div className='flex items-center gap-2 h-16'>
                  <p className='my-4 text-2xl font-bold text-pink-900 dark:text-neutral-100'>{`Confirmation Code:`}</p>
                  <p className='border border-pink-900 w-24 h-8 p-5 flex items-center justify-center text-pink-900 font-bold text-2xl dark:text-neutral-100 dark:border-neutral-400'>
                    {item.confirmation}
                  </p>
                </div>
                <p className='font-semibold text-pink-900 dark:text-neutral-100 desktop:text-1xl'>
                  Your appointment has been booked:
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
                    <Edit className='w-8 h-8 text-pink-900 dark:text-neutral-100' />
                  </div>
                  <button
                    onClick={() => setCancelModal(!cancelModal)}
                    className='w-16 h-7 text-sm text-pink-900 dark:text-neutral-100 underline'
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
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(RescheduleInfo);
