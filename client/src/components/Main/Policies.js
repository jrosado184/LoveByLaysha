import React from 'react';
import star from './../../assets/icons/star.svg';
import cash from './../../assets/icons/CashApp-logo.svg';
import zelle from './../../assets/icons/zelle.svg';

const Policies = () => {
  return (
    <div className='w-full flex flex-col items-center pb-24'>
      <h1 className='text-pink-900 text-lg py-4 font-semibold dark:text-neutral-100'>
        Policies
      </h1>
      <div>
        <ul className='w-full flex items-start justify-center'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900 dark:text-neutral-100'>
            A $30 non-refundable deposit is required to secure your spot!
            <span className='flex items-center gap-2'>
              <a
                className='ml-2'
                href='https://cash.app/$LayshaSerrano'
                target='_blank'
                rel='noreferrer'
              >
                <img className='w-24 py-2' src={cash} alt='' />
              </a>
              <p>OR</p>
              <img className='w-16' src={zelle} alt='layshs.s21@gmail.com' />
            </span>
          </p>
        </ul>
        <ul className='w-full flex items-center justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900 dark:text-neutral-100'>
            Please wear a mask during your service
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900 dark:text-neutral-100'>
            Location of service will be sent 24 hours prior to your appointment,
            I am located in the Northeast area
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900 dark:text-neutral-100'>
            Please be mindful of my time, as I will of yours. If you need to
            cancel or reschedule, please do so at least 12 hours in advanced
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900 dark:text-neutral-100'>
            Please come with bare nails unless you are expecting a soak off, I
            will not work over nails that were not done by me
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900 dark:text-neutral-100'>
            Please no extra guests unless they are getting serviced as well
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900 dark:text-neutral-100'>
            Any further questions, please feel free to contact me via email or
            on instagram, thank you for understanding!
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
