import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { appointmentId } from "../../redux/actions/appointment-actions";
import { connect } from "react-redux";
import ClientUploadSkeleton from "./ClientUploadsSkeleton";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";

const ClientUploads = ({ dispatch, getAppointmentById }) => {
  const nav = useNavigate();
  const allImageRef = ref(storage, "clientUploads/");
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [clientImage, setClientImage] = useState([]);

  useEffect(() => {
    dispatch(appointmentId(id));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    listAll(allImageRef).then((res) => {
      res.items.map((item) =>
        getDownloadURL(item).then((url) =>
          setClientImage((prev) => [...prev, url])
        )
      );
    });
  }, []);

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/appointments/${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    nav("/appointments");
  };

  const handleComplete = () => {
    axiosWithAuth()
      .delete(`/api/appointments/completed/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    nav("/appointments");
  };

  console.log(getAppointmentById);

  return (
    <>
      <div className='desktop:w-full pb-24'>
        <div className='desktop:flex flex-col'>
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
                      className='w-96 border border-pink-900 desktop:w-[50%] h-96 dark:border-neutral-900'
                      alt=''
                      src={appointmentId.images}
                    />
                  ) : (
                    <p className='text-pink-900 flex justify-center items-center w-96 border border-pink-900 rounded-md desktop:w-[50%] h-96 dark:border-neutral-900 dark:text-neutral-100'>
                      No images uploaded
                    </p>
                  )}
                  <p className='ml-2 my-6 text-pink-900 dark:text-neutral-100'>
                    {appointmentId.client_details === ""
                      ? "No Additional Details"
                      : appointmentId.client_details}
                  </p>
                </div>
              );
            })
          )}
          <div className='flex justify-evenly my-6 ml-2 desktop:justify-center gap-12'>
            <button
              onClick={handleDelete}
              className='w-24 h-10 mr-6 bg-pink-200 border border-pink-500 text-pink-500 shadow-sm rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
            >
              Remove
            </button>
            <button
              onClick={handleComplete}
              className='w-24 h-10 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(ClientUploads);
