import React, { useState, useEffect } from 'react';
import { addAppointments } from '../../redux/actions/appointment-actions.js';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ReactComponent as Check } from './../../assets/checkmark.svg';
import ImageUploadInput from '../Appointments/modals/ImageUploadInput';

const BookFileUpload = ({ info, dispatch, setInfo, formValid }) => {
  const nav = useNavigate();

  const [image, setImage] = useState(null);

  const handleImage = () => {
    if (image === null) return;
    const imageRef = ref(storage, `clientUploads/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setInfo({ ...info, images: url });
      });
    });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axiosWithAuth().post('/api/appointments', info);
      dispatch(addAppointments(res.data));
      nav('/loading-confirm');
    } catch (err) {
      console.log(err.response.message);
    }
  };
  useEffect(() => {
    handleImage();
  }, [image]);

  return (
    <div>
      <label className=' my-6 flex flex-col shrink md:ml-6 text-pink-900 dark:text-neutral-100'>
        Have a specific set in mind?
        <ImageUploadInput setImage={setImage} />
        {image && (
          <div className='w-full flex gap-2 py-1'>
            <p className='text-pink-900 dark:text-green-500'>
              Image Successfully Uploaded!
            </p>
          </div>
        )}
      </label>
      <div className='flex justify-center w-[97%] my-2'>
        <input
          className='w-20 text-md border border-pink-500 text-pink-900 bg-pink-200 rounded-full dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-100'
          data-testid='bookbtn'
          type='submit'
          value='Book'
          onClick={formValid(handleSubmit)}
        />
      </div>
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
