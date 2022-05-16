import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const CancelModal = () => {
  const { id } = useParams();

  const nav = useNavigate();

  const handleCancel = async () => {
    axiosWithAuth()
      .delete(`/api/appointments/${id}`)
      .then((res) => {
        nav('/loading');
        setTimeout(() => {
          nav('/canceled');
        }, 3000);
      });
  };
  return (
    <div className='upload-modal'>
      <div className='flex justify-center'>
        <div className='modal-box rounded-md'>
          <p className='font-bold my-2 w-[100%] text-center'>
            Are you sure you want to cancel?
          </p>
          <div className='flex justify-evenly w-full my-6'>
            <button className='border border-pink-400 bg-pink-200 text-pink-800 rounded-md w-20'>
              No
            </button>
            <button
              onClick={handleCancel}
              className='border border-pink-400 bg-pink-200 text-pink-800 rounded-md w-20'
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
