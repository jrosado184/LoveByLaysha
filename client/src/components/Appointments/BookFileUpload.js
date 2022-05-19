import React, { useState } from 'react';
import { addAppointments } from '../../redux/actions/appointment-actions.js';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SimpleFileUpload from 'react-simple-file-upload';
import axiosWithAuth from '../../utils/axiosWithAuth';

const BookFileUpload = ({ info, dispatch, setInfo }) => {
  const nav = useNavigate();

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/appointments', info)
      .then((res) => {
        dispatch(addAppointments(res.data));
        nav('/loading');
      })
      .catch((err) => {
        setError(err.response.data.message + ' (*) ');
      });
  };

  const handleFile = (url) => {
    setInfo({
      ...info,
      images: url,
    });
  };

  return (
    <div>
      <label className=' my-6 flex flex-col shrink md:ml-6'>
        Have a specific set in mind?
        <div className='my-2'>
          <SimpleFileUpload
            width={330}
            apiKey={process.env.REACT_APP_UPLOAD_KEY}
            onSuccess={handleFile}
            preview='false'
          />
        </div>
      </label>
      <p className='my-1 mb-6 ml-2 text-red-500 desktop:ml-8'>{error}</p>
      <input
        data-testid='bookbtn'
        className='w-20 h-8 my-3 ml-28 border-2 border-rose-300 bg-pink-100 ml-[30%] text-rose-500 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[63%]'
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

export default connect(mapStateToProps)(BookFileUpload);
