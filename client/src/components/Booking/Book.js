import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import BookFileUpload from "./BookFileUpload";
import { styles, Options, refillSet } from "../data/Options";
import { connect } from "react-redux";
import { getAppointments } from "../../redux/actions/appointment-actions";
import moment from "moment";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import RandomConfirmation from "../../Algos/RandomConfirmation";

const Book = ({ fetchAppointments, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState({
    year: parseInt(localStorage.getItem("appointment_year")) || moment().year(),
    month:
      parseInt(localStorage.getItem("appointment_month")) ||
      moment().month() + 1,
    day: parseInt(localStorage.getItem("appointment_day")) || moment().date(),
  });

  const disabledTimes = [];

  const [disabledDays, setDisabledDays] = useState([]);

  const [unavailableTimes, setUnavailableTimes] = useState([]);

  const [info, setInfo] = useState({
    confirmation: RandomConfirmation(5).toLocaleLowerCase(),
    appointment_month: selectedDate.month,
    appointment_day: selectedDate.day,
    appointment_year: selectedDate.year,
    appointment_time: "",
    client_name: localStorage.getItem("client_name") || "",
    client_phone: localStorage.getItem("client_phone") || "",
    client_set: "",
    client_refill: false,
    client_refillSet: "none",
    client_Soak: false,
    client_details: "",
    images: "",
  });

  const findBookedTimes = () => {
    fetchAppointments.map(
      (appointment) =>
        selectedDate.day === appointment.appointment_day &&
        selectedDate.year === appointment.appointment_year &&
        selectedDate.month === appointment.appointment_month &&
        disabledTimes.push(appointment.appointment_time)
    );
  };

  findBookedTimes();

  const findSelectedTimesOff = () => {
    unavailableTimes.map(
      (time) =>
        selectedDate.year === time.year &&
        selectedDate.month === time.month &&
        selectedDate.day === time.day &&
        disabledTimes.push(time.time)
    );
  };

  findSelectedTimesOff();

  const handleCalendar = (e) => {
    setSelectedDate(e);
    setInfo({
      ...info,
      appointment_time: "",
    });
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      appointment_month: selectedDate.month,
      appointment_day: selectedDate.day,
      appointment_year: selectedDate.year,
      client_set: info.client_refill ? "none" : info.client_set,
      client_refillSet: info.client_set ? "none" : info.client_set,
      client_name: info.client_name.toLowerCase(),
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getAppointments());
    axiosWithAuth()
      .get("/api/disabledDays")
      .then((res) => {
        setDisabledDays(res.data);
      });
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/disabledTimes")
      .then((res) => {
        setUnavailableTimes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem("client_name", info.client_name);
    localStorage.setItem("client_phone", info.client_phone);
  }, [info]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(info);

  return (
    <div className='w-[100%] h-screen'>
      <form className='pl-8 pr-8 xr:pl-10 py-4 pb-20 desktop:pl-[17%]'>
        <div className='md:flex md:w-[75%]'>
          <div className='flex justify-center'>
            <Calendar
              onChange={handleCalendar}
              calendarClassName='border-2 border-pink-200 h-[100%] dark:border-neutral-900'
              colorPrimary='#f8a4d1'
              value={selectedDate}
              minimumDate={utils().getToday()}
              disabledDays={disabledDays}
            />
            <div className='my-2 ml-2'></div>
          </div>
          <div className='md:w-[60%]'>
            <select
              {...register("appointment_time", {
                required: "Please select a time",
              })}
              name='appointment_time'
              value={info.appointment_time}
              onChange={handleChange}
              className='w-[100%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md xr:w-[97%] md:ml-6 md:w-[90%] dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
            >
              <option value=''>select a time</option>
              {<Options disabledTimes={disabledTimes} />}
            </select>
            <p className='text-red-500 md:ml-6'>
              {errors.appointment_time?.message}
            </p>
            <input
              {...register("client_name", { required: "Please enter a name" })}
              data-testid='name'
              className='pl-3 my-6 w-[100%] h-10 rounded-full border-2 border-pink-300 shadow-md xr:w-[97%] md:ml-6 md:w-[90%] dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-100'
              type='text'
              placeholder='Name'
              name='client_name'
              value={info.client_name}
              onChange={handleChange}
            />
            <p className='text-red-500 md:ml-6'>
              {errors.client_name?.message}
            </p>
            <input
              {...register("client_phone", {
                required: "Please enter a valid phone number",
                valueAsNumber: "Invalid Input",
              })}
              data-testid='phone'
              name='client_phone'
              value={info.client_phone}
              onChange={handleChange}
              className='pl-3 my-6 w-[100%] h-10 rounded-full border-2 border-pink-300 shadow-md xr:w-[97%] md:ml-6 md:w-[90%] dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900 dark:placeholder:text-neutral-100'
              type='number'
              placeholder='Phone number'
            />
            <p className='text-red-500 md:ml-6'>
              {errors.client_phone?.message}
            </p>
            <select
              name='client_set'
              value={info.client_set}
              onChange={handleChange}
              disabled={info.client_refill}
              className={
                !info.client_refill
                  ? "w-[100%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md xr:w-[97%] md:ml-6 md:w-[90%] dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100"
                  : "hidden"
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
                  ? "w-[100%] h-10 mb-1 border-2 border-pink-300 pl-2 rounded-full xr:w-[97%] md:ml-6 md:w-[90%] dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100"
                  : "hidden"
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
              />
              <p>Soak Off</p>
              <p className='ml-52 text-pink-300 md:ml-20 dark:text-neutral-100'>
                $10
              </p>
            </label>
            <label className=' my-2 md:ml-6'>
              <textarea
                data-testid='details'
                name='client_details'
                placeholder='Additional Details:'
                value={info.client_details}
                onChange={handleChange}
                className='w-[100%] h-20 border-2 border-pink-400 pl-2 py-1 rounded-md xr:w-[97%] md:w-[90%] dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900'
              />
            </label>
            <BookFileUpload
              info={info}
              setInfo={setInfo}
              formValid={handleSubmit}
            />
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
