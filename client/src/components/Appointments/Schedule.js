import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import moment from 'moment';
import { Options } from './../data/Options';

const Schedule = ({ fetchAppointments, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState({
    year: moment().year(),
    month: moment().month() + 1,
    day: moment().date(),
  });

  const [time, setTime] = useState(false);

  const [fullDay, setFullDay] = useState(false);

  const disabledTimes = [];

  fetchAppointments.map(
    (appointment) =>
      selectedDate.day === appointment.appointment_day &&
      selectedDate.year === appointment.appointment_year &&
      selectedDate.month === appointment.appointment_month &&
      disabledTimes.push(appointment.appointment_time)
  );

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  return (
    <div className='flex flex-col items-center my-6'>
      <Calendar
        calendarClassName='border-2 border-pink-200 h-[100%]'
        colorPrimary='#f8a4d1'
        value={selectedDate}
        minimumDate={utils().getToday()}
        onChange={setSelectedDate}
      />
      <div className='w-full flex justify-around my-4'>
        <div className='flex items-center'>
          <label className='mr-12'>
            <input
              onChange={() => setFullDay(!fullDay)}
              value={fullDay}
              className='mr-2'
              type='checkbox'
            />
            Full Day
          </label>
        </div>
        <div className='flex items-center justify-center'>
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
        <button className='w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-sm'>
          Disable
        </button>
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
