import React, { useState, useEffect } from 'react';
import {
  postAppointments,
  getAppointments,
} from '../../redux/actions/appointment-actions.js';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosWithAuth from '../../utils/axiosWithAuth';

const FileUpload = ({ info, dispatch, fetchAppointments }) => {
  const nav = useNavigate();
  const [image, setImage] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    axiosWithAuth()
      .post('/image', formData)
      .then((res) => {
        console.log(res);
      });
    dispatch(postAppointments(info));
    nav(
      `/confirm/${
        fetchAppointments[fetchAppointments.length - 1].appointment_id
      }`
    );
  };

  return (
    <div>
      {' '}
      <label className=' my-4 flex flex-col shrink md:ml-6'>
        Have a specific set in mind?
        <input
          name='image'
          onChange={(e) => setImage(e.target.files[0])}
          type='file'
          className='w-100 my-2 file:rounded-full file:border-0 file:bg-pink-100 file:font-semibold
         file:text-pink-300 file:pl-[3%] file:pr-[3%] file:py-[1%] file:pb-[1%]'
        />
      </label>
      <input
        data-testid='bookbtn'
        className='w-20 h-8 my-3 ml-28 border-2 border-pink-300 bg-pink-100 ml-[30%] text-pink-300 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[80%]'
        type='submit'
        onClick={handleSubmit}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    addAppointments: state.appointments.addAppointments,
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(FileUpload);
