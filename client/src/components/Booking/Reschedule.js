import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "./../../utils/axiosWithAuth";

const Reschedule = () => {
  const nav = useNavigate();

  const [confirmation, setConfirmation] = useState({
    client_name: "",
    confirmation: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setConfirmation({
      ...confirmation,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleRequest = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/reschedule", confirmation)
      .then((res) => {
        nav(`/reschedule-info/${res?.data?.[0].appointment_id}`);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <form
      onSubmit={handleRequest}
      className='h-[50vh] flex flex-col justify-center items-center'
    >
      <h1 className='font-bold text-2xl my-6 text-pink-900 dark:text-neutral-100'>
        Let's find your appointment
      </h1>
      <input
        className='w-[80vw] h-12 border border-pink-900 rounded-full pl-4 dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100 desktop:w-[30vw]'
        type='text'
        placeholder='Enter your name'
        name='client_name'
        value={confirmation.name}
        onChange={handleChange}
      />
      <input
        className='w-[80vw] h-12 border border-pink-900 my-6 rounded-full dark:bg-neutral-700 dark:border-neutral-900 pl-4 dark:text-neutral-100 desktop:w-[30vw]'
        type='text'
        placeholder='Enter your confirmation number'
        name='confirmation'
        value={confirmation.confirmation}
        onChange={handleChange}
      />
      <input
        className='w-24 h-8 border border-pink-500 text-pink-900 bg-pink-200 rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
        type='submit'
        value='Submit'
      />
      <p className='text-pink-900 dark:text-neutral-100 my-6'>{error}</p>
    </form>
  );
};

export default Reschedule;
