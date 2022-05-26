import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { Options } from './../data/Options';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Schedule = ({ fetchAppointments, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [enableDate, setEnableDate] = useState(null);
  const [disabledDays, setDisabledDays] = useState([]);
  const [time, setTime] = useState(false);
  const [fullDay, setFullDay] = useState(false);
  const [enable, setEnable] = useState(false);

  const disabledTimes = [];

  const addDisabledDay = () => {
    axiosWithAuth()
      .post('/api/disabledDays', selectedDate)
      .then((res) => {
        setDisabledDays((prev) => [...prev, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDisabledButton = async () => {
    await addDisabledDay();
    setSelectedDate(null);
  };

  const handleEnableButton = async (e) => {
    await EnableDate(e);
    setEnable(false);
  };

  const EnableDate = (e) => {
    e.preventDefault();
    enableDate &&
      axiosWithAuth()
        .delete('/api/disabledDays', { data: enableDate })
        .then((res) => {
          setDisabledDays(res.data);
          setEnable(false);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    !selectedDate !== null &&
      fetchAppointments.map(
        (appointment) =>
          selectedDate.day === appointment.appointment_day &&
          selectedDate.year === appointment.appointment_year &&
          selectedDate.month === appointment.appointment_month &&
          disabledTimes.push(appointment.appointment_time)
      );
  }, []);

  useEffect(() => {
    dispatch(getAppointments());
    axiosWithAuth()
      .get('/api/disabledDays')
      .then((res) => {
        setDisabledDays(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='flex flex-col items-center my-6'>
      {!enable ? (
        <Calendar
          calendarClassName='border-2 border-pink-200 h-[100%]'
          colorPrimary='#f8a4d1'
          value={selectedDate}
          minimumDate={utils().getToday()}
          onChange={setSelectedDate}
          disabledDays={disabledDays}
        />
      ) : (
        <Calendar
          calendarClassName='border-2 border-pink-200 h-[100%]'
          colorPrimary='#f8a4d1'
          value={enableDate}
          minimumDate={utils().getToday()}
          onChange={setEnableDate}
        />
      )}
      {selectedDate && (
        <div className='w-full flex justify-start my-4'>
          <div className='flex items-center justify-center ml-12'>
            <label className='mr-2'>
              <input
                onChange={() => setTime(!time)}
                value={time}
                className='mr-2'
                type='checkbox'
              />
              Time
            </label>
          </div>
        </div>
      )}
      {time && (
        <div className='w-full flex justify-center'>
          <select
            name='appointment_time'
            className='w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6 desktop:w-[70%]'
          >
            <option value=''>select a time</option>
            {<Options disabledTimes={disabledTimes} />}
          </select>
        </div>
      )}
      <div className='w-full flex justify-center my-8'>
        {!enable && (
          <button
            onClick={handleDisabledButton}
            disabled={selectedDate ? false : true}
            className={
              selectedDate
                ? 'w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-sm'
                : 'w-24 h-8 mr-6 bg-white border border-pink-500 text-pink-500  shadow-sm rounded-sm opacity-60'
            }
          >
            Disable
          </button>
        )}
        {!enable ? (
          <button
            onClick={() => setEnable(!enable)}
            className='w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-sm'
          >
            Schedule
          </button>
        ) : (
          <button
            onClick={handleEnableButton}
            className='w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-sm'
          >
            Enable
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Schedule);
