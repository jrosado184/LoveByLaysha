import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { disabledDays } from './../data/Disabled';
import BookFileUpload from './BookFileUpload';
import { Months } from './../../Algos/Months';
import { times, styles, refillSet } from '../data/Options';
import { bookingSchema } from '../../validation/BookingValidation';
import * as yup from 'yup';

const Book = () => {
  const [selectedDate, setSelectedDate] = useState(null);

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

  const [error, setError] = useState({
    appointment_day: 'Please select a date before continuing',
    appointment_time: 'Please select an available time',
    client_name: 'Please enter a name',
    client_phone: 'Please enter a valid phone number',
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      appointment_month: `${Months(selectedDate.month)}`,
      appointment_day: `${selectedDate.day}`,
      appointment_year: ` ${selectedDate.year}`,
      client_set: info.client_refill ? 'none' : info.client_set,
      client_refillSet: info.client_set ? 'none' : info.client_set,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form className='sm:pl-10 py-4 desktop:pl-[17%] w-full'>
        <div className='md:flex'>
          <div
            className='flex flex-col'
            onClick={() => setError({ ...error, appointment_day: '' })}
          >
            <Calendar
              onChange={setSelectedDate}
              calendarClassName='border-2 border-pink-200 h-[90%]'
              colorPrimary='#f8a4d1'
              value={selectedDate}
              minimumDate={utils().getToday()}
              disabledDays={disabledDays}
            />
            <div className='my-2 ml-2'>
              <p className='text-red-500 my-2'>
                {!info.appointment_day && error.appointment_day}
              </p>
            </div>
          </div>
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
                className='w-[88%] h-20 border-2 border-pink-400 pl-2 py-1'
              />
            </label>
            <BookFileUpload info={info} setInfo={setInfo} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Book;
