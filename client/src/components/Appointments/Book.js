import React, { useState, useEffect } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { disabledDays } from './../data/Disabled';
import BookFileUpload from './BookFileUpload';
import { styles, Options, refillSet } from '../data/Options';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';
import moment from 'moment';

const Book = ({ fetchAppointments, dispatch }) => {
  // const disabledDays = [];

  /* DO NOT REMOVE ---- to use for selecting off days later on */
  // fetchAppointments.map((t) =>
  //   disabledDays.push({
  //     year: t.appointment_year,
  //     month: t.appointment_month,
  //     day: t.appointment_day,
  //   })
  // );

  // console.log(moment.format('MMM'));

  const [selectedDate, setSelectedDate] = useState({
    year: moment().year(),
    month: moment().month() + 1,
    day: moment().date(),
  });

  const [info, setInfo] = useState({
    appointment_month: selectedDate.month,
    appointment_day: selectedDate.day,
    appointment_year: selectedDate.year,
    appointment_time: '',
    client_name: '',
    client_phone: '',
    client_set: 'none',
    client_refill: false,
    client_refillSet: 'none',
    client_Soak: false,
    client_details: '',
    images: '',
  });

  const disabledTimes = [];

  fetchAppointments.map(
    (appointment) =>
      selectedDate.day === appointment.appointment_day &&
      selectedDate.year === appointment.appointment_year &&
      selectedDate.month === appointment.appointment_month &&
      disabledTimes.push(appointment.appointment_time)
  );

  const handleCalendar = (e) => {
    setSelectedDate(e);
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      appointment_month: selectedDate.month,
      appointment_day: `${selectedDate.day}`,
      appointment_year: ` ${selectedDate.year}`,
      client_set: info.client_refill ? 'none' : info.client_set,
      client_refillSet: info.client_set ? 'none' : info.client_set,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  return (
    <div>
      <form className='sm:pl-10 py-4 desktop:pl-[17%] w-full'>
        <div className='md:flex'>
          <div className='flex flex-col'>
            <Calendar
              onChange={handleCalendar}
              calendarClassName='border-2 border-pink-200 h-[90%]'
              colorPrimary='#f8a4d1'
              value={selectedDate}
              minimumDate={utils().getToday()}
            />
            <div className='my-2 ml-2'></div>
          </div>
          <div className='md:w-[60%]'>
            <select
              name='appointment_time'
              value={info.appointment_time}
              onChange={handleChange}
              className='w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6 desktop:w-[70%]'
            >
              <option value=''>select a time</option>
              {<Options disabledTimes={disabledTimes} />}
            </select>
            <input
              data-testid='name'
              className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6 desktop:w-[70%]'
              type='text'
              placeholder='Name'
              name='client_name'
              value={info.client_name}
              onChange={handleChange}
            />
            <input
              data-testid='phone'
              name='client_phone'
              value={info.client_phone}
              onChange={handleChange}
              className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6 desktop:w-[70%]'
              type='tel'
              placeholder='Phone number'
            />
            <select
              name='client_set'
              value={info.client_set}
              onChange={handleChange}
              disabled={info.client_refill}
              className={
                !info.client_refill
                  ? 'w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6 desktop:w-[70%]'
                  : 'hidden'
              }
            >
              <option value=''>Select a new set</option>
              {styles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
            <label className='flex items-center'>
              <input
                data-testid='rinput'
                name='client_refill'
                className='mr-2 my-4 border-2 md:ml-6'
                type='checkbox'
                onChange={() =>
                  setInfo({ ...info, client_refill: !info.client_refill })
                }
                value={info.client_refill}
              />
              Refill
            </label>
            <select
              data-testid='refill'
              name='client_refillSet'
              value={info.client_refillSet}
              onChange={handleChange}
              className={
                info.client_refill
                  ? 'w-[88%] h-10 mb-1 border-2 border-pink-300 pl-2 rounded-full md:ml-6 desktop:w-[70%]'
                  : 'hidden'
              }
            >
              <option value=''>select refill</option>
              {refillSet.map((set) => (
                <option key={set} value={set}>
                  {set}
                </option>
              ))}
            </select>
            <label className='flex items-center my-4 md:ml-6'>
              <input
                name='client_Soak'
                value={info.client_Soak}
                onChange={() =>
                  setInfo({ ...info, client_Soak: !info.client_Soak })
                }
                className='mr-2 my-1'
                type='checkbox'
              />
              <p>Soak Off</p>
              <p className='ml-52 text-pink-300'>$10</p>
            </label>
            <label className=' my-2 md:ml-6'>
              <textarea
                data-testid='details'
                name='client_details'
                placeholder='Additional Details:'
                value={info.client_details}
                onChange={handleChange}
                className='w-[88%] h-20 border-2 border-pink-400 pl-2 py-1 desktop:w-[70%]'
              />
            </label>
            <BookFileUpload info={info} setInfo={setInfo} />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Book);
