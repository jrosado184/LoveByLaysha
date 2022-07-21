import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { styles, refillSet, Options } from '../../data/Options';
import { connect } from 'react-redux';
import axios from 'axios';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { getAppointments } from '../../../redux/actions/appointment-actions';
import ImageUploadInput from '../../Appointments/modals/ImageUploadInput';
import { storage } from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ReactComponent as Check } from './../../../assets/checkmark.svg';
import { ReactComponent as Back } from './../../../assets/icons/back.svg';

const Edit = ({ fetchAppointments, dispatch }) => {
  const nav = useNavigate();

  const { id } = useParams();

  const [selectedDate, setSelectedDate] = useState({
    year: 2022,
    month: 20,
    day: 1,
  });

  const [disabledDays, setDisabledDays] = useState([]);

  const [changes, setChanges] = useState(false);

  const [info, setInfo] = useState({
    appointment_month: selectedDate.year,
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

  disabledTimes.splice(disabledTimes.indexOf(info.appointment_time));

  const handleChange = (e) => {
    setInfo({
      ...info,
      appointment_month: selectedDate.month,
      appointment_day: selectedDate.day,
      appointment_year: selectedDate.year,
      client_set: info.client_refill ? 'none' : info.client_set,
      client_refillSet: info.client_set ? 'none' : info.client_set,
      [e.target.name]: e.target.value,
    });
  };

  const [image, setImage] = useState(null);

  const handleImage = () => {
    if (image === null) return;
    const imageRef = ref(storage, `clientUploads/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setInfo({ ...info, images: url });
      });
    });
  };

  const handleCalendar = () => {
    setInfo({
      ...info,
      appointment_month: selectedDate.month,
      appointment_day: selectedDate.day,
      appointment_year: selectedDate.year,
    });
    setChanges(!changes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://lovebylaysha.herokuapp.com/api/appointments/${id}`, info)
      .then((res) => {
        setInfo(res.data[0]);
        nav(
          `/confirm/${
            fetchAppointments[fetchAppointments.length - 1].appointment_id
          }`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/appointments/${id}`)
      .then((res) => {
        setInfo(res.data[0]);
      });
  }, []);

  useEffect(() => {
    dispatch(getAppointments());
    axiosWithAuth()
      .get('/api/disabledDays')
      .then((res) => {
        setDisabledDays(res.data);
      });
  }, []);

  useEffect(() => {
    setSelectedDate({
      month: info.appointment_month,
      day: info.appointment_day,
      year: info.appointment_year,
    });
  }, [info]);

  useEffect(() => {
    handleImage();
  }, [image]);

  return (
    <>
      <div className='w-full flex ml-6 py-4 '>
        <Back
          onClick={() => nav(`/confirm/${id}`)}
          className='text-pink-900 w-7 dark:text-neutral-100 cursor-pointer'
        />
      </div>
      <form className='pl-8 pb-24 desktop:pl-[17%] w-full'>
        <div className='md:flex'>
          <Calendar
            onChange={setSelectedDate}
            calendarClassName='border-2 border-pink-200 dark:border-neutral-900'
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
              className='w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6 dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900'
            >
              <option value=''>select a time</option>
              {<Options disabledTimes={disabledTimes} />}
            </select>
            <input
              data-testid='name'
              className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6 dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900'
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
              className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6 dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900'
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
                  ? 'w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6 dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900'
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
            <label className='flex items-center dark:text-neutral-100'>
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
                  ? 'w-[88%] h-10 mb-1 border-2 border-pink-300 pl-2 rounded-full md:ml-6 dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900'
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
            <label className='flex items-center my-4 md:ml-6 dark:text-neutral-100'>
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
              <p className='ml-52 text-pink-300 dark:text-neutral-100'>$10</p>
            </label>
            <label className=' my-2 md:ml-6 dark:text-neutral-100'>
              Additional Details:
              <textarea
                data-testid='details'
                name='client_details'
                value={info.client_details}
                onChange={handleChange}
                className='w-[88%] h-20 pl-2 border-2 border-pink-300 md:ml-6 dark:bg-neutral-700 dark:border-neutral-900'
              />
            </label>
            <div>
              <label className=' my-6 flex flex-col shrink md:ml-6 text-pink-900 dark:text-neutral-100'>
                Have a specific set in mind?
                <div className='my-2'>
                  <ImageUploadInput setImage={setImage} />
                  {image && (
                    <div className='w-full flex gap-2 py-1'>
                      <p className='text-pink-900 dark:text-neutral-100'>
                        File Uploaded
                      </p>
                      <Check
                        fill='rgb(34 197 94)'
                        className='w-6 text-neutral-500'
                      />
                    </div>
                  )}
                </div>
              </label>
              <label className='flex items-center gap-2 text-pink-900 dark:text-neutral-100 desktop:ml-6'>
                <input
                  onChange={handleCalendar}
                  value={changes}
                  className='md:ml-4'
                  type='checkbox'
                />
                Update Changes?
              </label>
              <input
                disabled={changes ? false : true}
                data-testid='bookbtn'
                className='w-24 h-8 my-6 ml-28 border-2 border-rose-300 bg-pink-100 text-rose-500 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[80%] dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
                type='submit'
                value='Save'
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getAppointmentById: state.appointments.getAppointmentById,
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Edit);
