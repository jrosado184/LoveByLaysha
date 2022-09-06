import React, { useState } from "react";
import axiosWithAuth from "./../../utils/axiosWithAuth";

const Reschedule = () => {
  const [confirmation, setConfirmation] = useState({
    client_name: "",
    confirmation: "",
  });

  const handleChange = (e) => {
    setConfirmation({
      ...confirmation,
      [e.target.name]: e.target.value,
    });
  };

  const handleRequest = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get("/api/appointments")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
    </form>
  );
};

export default Reschedule;
