import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const CancelModal = () => {
  const { id } = useParams();

  const handleCancel = () => {
    axiosWithAuth()
      .delete(`/api/appointments/${id}`)
      .then((res) => {
        console.log('deleted');
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
