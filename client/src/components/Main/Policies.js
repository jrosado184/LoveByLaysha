import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import star from './../../assets/icons/star.svg';
import Loading from './../Appointments/Loading';

const Policies = () => {
  const nav = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div className='w-full flex flex-col items-center pb-24'>
      <h1 className='text-pink-900 text-lg py-4 font-semibold'>Policies</h1>
      <div>
        <ul className='w-full flex items-start justify-center'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900'>
            A $30 non-refundable deposit is required to secure your spot!
          </p>
        </ul>
        <ul className='w-full flex items-center justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900'>
            Please wear a mask during your service
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900'>
            Location of service will be sent 24 hours prior to your appointment,
            I am located in the Northeast area
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900'>
            Please be mindful of my time, as I will of yours. If you need to
            cancel or reschedule, please do so at least 12 hours in advanced
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900'>
            Please come with bear nails unless you are expecting a soak off, I
            will not work over nails that were not done by me
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900'>
            Please no extra guests unless they are getting serviced as well
          </p>
        </ul>
        <ul className='w-full flex items-start justify-center py-6'>
          <img className='w-7' src={star} alt='' />
          <p className='w-80 ml-2 text-pink-900'>
            Any further questions, please feel free to contact me via email or
            on instagram, thank you for understanding!
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
