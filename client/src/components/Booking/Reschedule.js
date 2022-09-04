import React from 'react';

const Reschedule = () => {
  return (
    <form className='h-[50vh] flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl my-6 text-pink-900 dark:text-neutral-100'>
        Let's find your appointment
      </h1>
      <input
        className='w-[80vw] h-12 border border-pink-900 rounded-full pl-4 dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100 desktop:w-[30vw]'
        type='text'
        placeholder='Enter your name'
      />
      <input
        className='w-[80vw] h-12 border border-pink-900 my-6 rounded-full dark:bg-neutral-700 dark:border-neutral-900 pl-4 dark:text-neutral-100 desktop:w-[30vw]'
        type='text'
        placeholder='Enter your confirmation number'
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
