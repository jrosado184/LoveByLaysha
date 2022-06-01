import React from 'react';
import { addAppointments } from '../../redux/actions/appointment-actions.js';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SimpleFileUpload from 'react-simple-file-upload';
import axiosWithAuth from '../../utils/axiosWithAuth';

const BookFileUpload = ({ info, dispatch, setInfo, handleErrors }) => {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    info.appointment_day &&
      info.appointment_time &&
      info.client_name &&
      info.client_phone &&
      info.client_set !== 'none' &&
      axiosWithAuth()
        .post('/api/appointments', info)
        .then((res) => {
          dispatch(addAppointments(res.data));
          nav('/loading');
        })
        .catch((err) => {
          console.log(err.response.message);
        });
    axiosWithAuth()
      .post('/api/disabledTimes', { time: '5:00 PM' })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
            preview='true'
          />
        </div>
      </label>
      <input
        disabled={
          info.appointment_day &&
          info.appointment_time &&
          info.client_name &&
          info.client_phone
            ? false
            : true
        }
        data-testid='bookbtn'
        className={
          info.appointment_day &&
          info.appointment_time &&
          info.client_name &&
          info.client_phone &&
          (info.client_set !== 'none' || info.refillSet !== 'none')
            ? 'w-20 h-8 my-3 flex justify-center items-center border-2 border-rose-300 bg-pink-100 ml-[30%] text-rose-500 rounded-full sm2:ml-[70%] md:ml-[75%] lg:ml-[63%]'
            : 'opacity-90 w-20 h-8 my-3 flex justify-center items-center border-2 border-rose-300 text-rose-400 ml-[30%] rounded-full sm2:ml-[70%] md:ml-[75%] lg:ml-[63%]'
        }
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
