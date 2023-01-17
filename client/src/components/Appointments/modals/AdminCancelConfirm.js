import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosWithAuth from "../../../utils/axiosWithAuth";
import Rodal from "rodal";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Loading from "./../pages/Loading";

const AdminCancelConfirm = ({ showCancelModal, setShowCancelModal }) => {
  const [cancelModal, setCancelModal] = useState(true);

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const nav = useNavigate();

  const handleCancel = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    axiosWithAuth()
      .delete(`/api/appointments/${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    nav("/appointments");
  };

  return (
    <div>
      <Rodal
        animation={"zoom"}
        visible={cancelModal}
        onClose={() => setCancelModal(false)}
        showCloseButton={false}
        width={300}
        height={120}
      >
        <p className='font-bold h-6 w-[100%] text-center text-pink-900 dark:text-neutral-900'>
          Are you sure you want to cancel?
        </p>
        <div className='flex justify-center gap-8 py-5'>
          <button
            onClick={() => setShowCancelModal(false)}
            className='border border-pink-400 bg-pink-200 text-pink-800 rounded-md w-10 flex justify-center items-center dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
          >
            <ArrowLeftIcon className='w-6 h-6' />
          </button>
          <button
            onClick={handleCancel}
            className='border border-pink-400 bg-pink-200 text-pink-800 rounded-md w-16 dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
          >
            Cancel
          </button>
        </div>
      </Rodal>
    </div>
  );
};

export default AdminCancelConfirm;
