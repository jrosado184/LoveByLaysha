import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { getAppointments } from '../../redux/actions/appointment-actions';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { Options } from '../data/Options';
import axiosWithAuth from '../../utils/axiosWithAuth';
import moment from 'moment';
import MainCalendar from './MainCalendar';
import FooterNav from './../Mobile/FooterNav';
import DisabledTimes from './DisabledTimes';

const Schedule = ({ fetchAppointments, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState({
    year: moment().year(),
    month: moment().month() + 1,
    day: moment().date(),
  });

  const [enableDate, setEnableDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [disabledDays, setDisabledDays] = useState([]);
  const [time, setTime] = useState(false);
  const [enable, setEnable] = useState(false);
  const [unavailableTimes, setUnavailableTimes] = useState([]);

  const disabledTimes = [];

  const findBookedTimes = () => {
    fetchAppointments.map(
      (appointment) =>
        selectedDate.day === appointment.appointment_day &&
        selectedDate.year === appointment.appointment_year &&
        selectedDate.month === appointment.appointment_month &&
        disabledTimes.push(appointment.appointment_time)
    );
  };

  const findSelectedTimesOff = () => {
    unavailableTimes.map(
      (time) =>
        selectedDate.year === time.year &&
        selectedDate.month === time.month &&
        selectedDate.day === time.day &&
        disabledTimes.push(time.time)
    );
  };
  selectedDate !== null && findBookedTimes();

  findSelectedTimesOff();

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

  const disableTime = () => {
    axiosWithAuth()
      .post('/api/disabledTimes', {
        time: selectedTime,
        year: selectedDate.year,
        month: selectedDate.month,
        day: selectedDate.day,
      })
      .then((res) => {
        setUnavailableTimes((prev) => [...prev, res.data]);
        setTime(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const enableTime = (time) => {
    axiosWithAuth()
      .delete('/api/disabledTimes', { data: { time: time } })
      .then((res) => {
        setUnavailableTimes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  useEffect(() => {
    axiosWithAuth()
      .get('/api/disabledTimes')
      .then((res) => {
        setUnavailableTimes(res.data);
      });
  }, []);

  return (
    <>
      <div className='flex flex-col items-center w-full desktop:flex-row desktop:items-start pb-20 desktop:pl-20 '>
        <div className='flex flex-col items-center my-6 desktop:items-start'>
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
              <div className='flex items-center justify-center'>
                <label className='mr-2 text-pink-900 dark:text-neutral-100'>
                  <input
                    onChange={() => setTime(!time)}
                    value={time}
                    className='mr-2 border border-pink-900 '
                    type='checkbox'
                    checked={time}
                  />
                  Time
                </label>
              </div>
            </div>
          )}
          {time && (
            <div className='w-full flex justify-center'>
              <select
                onChange={(e) => setSelectedTime(e.target.value)}
                name='appointment_time'
                className='w-full h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:desktop:w-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
              >
                <option value=''>select a time</option>
                {<Options disabledTimes={disabledTimes} />}
              </select>
            </div>
          )}
          <div className='w-full flex justify-center my-4 desktop:justify-start desktop:ml-12'>
            {!enable &&
              (!time ? (
                <button
                  onClick={addDisabledDay}
                  disabled={selectedDate ? false : true}
                  className={
                    selectedDate
                      ? 'w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
                      : 'w-24 h-8 mr-6 bg-white border border-pink-500 text-pink-500  shadow-sm rounded-sm opacity-60 dark:bg-neutral-600 dark:border-neutral-900 dark:text-neutral-100'
                  }
                >
                  Disable
                </button>
              ) : (
                <button
                  onClick={disableTime}
                  className='w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
                >
                  Disable
                </button>
              ))}
            {!enable ? (
              <button
                onClick={() => setEnable(!enable)}
                className='w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
              >
                Schedule
              </button>
            ) : (
              <button
                onClick={handleEnableButton}
                className='w-24 h-8 mr-6 bg-pink-200 border border-pink-500 text-pink-500  shadow-sm rounded-full'
              >
                Enable
              </button>
            )}
          </div>
          <DisabledTimes
            disabledTimes={disabledTimes}
            enableTime={enableTime}
            selectedDate={selectedDate}
          />
        </div>
        <div className=' py-6 h-full w-[95%] desktop:w-[81%] desktop:pl-20'>
          <div className='hidden desktop:block'>
            <MainCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Schedule);
