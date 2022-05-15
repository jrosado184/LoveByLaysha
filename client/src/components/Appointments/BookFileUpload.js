import React from 'react';
import { postAppointments } from '../../redux/actions/appointment-actions.js';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SimpleFileUpload from 'react-simple-file-upload';

const BookFileUpload = ({ info, dispatch, setInfo }) => {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAppointments(info));
    nav('/loading');
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
      <input
        data-testid='bookbtn'
        className='w-20 h-8 my-3 ml-28 border-2 border-rose-300 bg-pink-100 ml-[30%] text-rose-500 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[80%]'
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
