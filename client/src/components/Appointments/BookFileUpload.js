
import React, { useState, useEffect } from "react";
import { addAppointments } from "../../redux/actions/appointment-actions.js";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import React from "react";
import { addAppointments } from "../../redux/actions/appointment-actions.js";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import SimpleFileUpload from "react-simple-file-upload";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const disabledTimes = [];

const BookFileUpload = ({ info, dispatch, setInfo, formValid }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);

  const nav = useNavigate();

  const handleSubmit = async () => {
    await handleFile();
    axiosWithAuth()
      .post("/api/appointments", info)
      .then((res) => {
        dispatch(addAppointments(res.data));
        nav("/loading-confirm");
      })
      .catch((err) => {
        console.log(err.response.message);
      });
  };

  const handleFile = async () => {
    if (image === null) return;
    const imageRef = ref(storage, `clientUploads/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl((prev) => [...prev, url]);
      });
    });
    handleImage();
  };

  const handleImage = async () => {
    await handleFile();
    setInfo({ ...info, images: imageUrl });
  };

  return (
    <div>
      <label className=' my-6 flex flex-col shrink md:ml-6 dark:text-neutral-100'>
        Have a specific set in mind?
        <div className='my-2'>
          <div className='flex justify-center items-center w-[87%]'>
            <label
              htmlFor='dropzone-file'
              className='flex flex-col justify-center items-center w-full h-48 bg-gray-50 rounded-lg border-2 border-pink-200 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-gray-100 dark:border-neutral-900 dark:hover:border-gray-500 dark:hover:bg-neutral-600'
            >
              <div className='flex flex-col justify-center items-center pt-5 pb-6'>
                <svg
                  className='mb-3 w-10 h-10 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                  ></path>
                </svg>
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold'>Click to upload</span> or drag
                  and drop
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id='dropzone-file'
                type='file'
                className='hidden'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>

        <div className='my-2 xr:pl-1'>
          <input type='file' />
        </div>
      </label>
      <input
        data-testid='bookbtn'
        className={
          info.appointment_day &&
          info.appointment_time &&
          info.client_name &&
          info.client_phone &&
          (info.client_set !== "none" || info.refillSet !== "none")
            ? "w-24 h-8 my-3 flex justify-center items-center border-2 border-rose-300 bg-pink-100 ml-[30%] text-rose-500 rounded-full sm2:ml-[70%] md:ml-[75%] lg:ml-[63%] dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100"
            : "opacity-90 w-24 h-8 my-3 flex justify-center items-center border-2 border-rose-300 text-rose-400 ml-[30%] rounded-full sm2:ml-[70%] md:ml-[75%] lg:ml-[63%] dark:bg-neutral-500 dark:border-neutral-900 dark:text-neutral-100"
        }
        type='submit'
        value='Book'
        onClick={formValid(handleSubmit)}
      />
      <button onClick={handleFile} className='w-6 bg-white'>
        {" "}
        test
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    addAppointments: state.appointments.addAppointments,
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(BookFileUpload);
