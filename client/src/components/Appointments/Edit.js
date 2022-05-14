import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { disabledDays } from './../data/Disabled';
import FileUpload from './FileUpload';
import Months from './../../Algos/Months';
import { times, styles, refillSet } from '../data/Options';
import { connect } from 'react-redux';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Edit = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const { id } = useParams();

  const [info, setInfo] = useState({
    appointment_month: selectedDate,
    appointment_day: selectedDate,
    appointment_year: selectedDate,
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

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/appointments/${id}`)
      .then((res) => {
        setInfo(res.data[0]);
      });
  }, []);

  const handleChange = (e) => {
    setInfo({
      ...info,
      appointment_month: `${Months(selectedDate.month)}`,
      appointment_day: `${selectedDate.day}`,
      appointment_year: ` ${selectedDate.year}`,
      client_set: info.client_refill ? 'none' : info.client_set,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className='pl-10 py-4 desktop:pl-[17%] w-full'>
      <div className='md:flex'>
        <Calendar
          onChange={setSelectedDate}
          calendarClassName='border-2 border-pink-200'
          colorPrimary='#f8a4d1'
          value={selectedDate}
          minimumDate={utils().getToday()}
          disabledDays={disabledDays}
        />
        <div className='md:w-[60%]'>
          <select
            name='appointment_time'
            value={info.appointment_time}
            onChange={handleChange}
            className='w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6'
          >
            <option value=''>select a time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <input
            data-testid='name'
            className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6'
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
            className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6'
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
                ? 'w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6'
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
              checked={info.client_refill}
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
                ? 'w-[88%] h-10 mb-1 border-2 border-pink-300 pl-2 rounded-full md:ml-6'
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
              checked={info.client_Soak}
            />
            <p>Soak Off</p>
            <p className='ml-52 text-pink-300'>$10</p>
          </label>
          <label className=' my-2 md:ml-6'>
            Additional Details:
            <textarea
              data-testid='details'
              name='client_details'
              value={info.client_details}
              onChange={handleChange}
              className='w-[88%] h-20 pl-2 border-2 border-pink-400 md:ml-6'
            />
          </label>
          <FileUpload info={info} setInfo={setInfo} />
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
  };
};

export default connect(mapStateToProps)(Edit);
