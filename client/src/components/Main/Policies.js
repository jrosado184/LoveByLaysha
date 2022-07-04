import React from 'react';
import { ReactComponent as Star } from './../../assets/icons/star.svg';
import { ReactComponent as CashApp } from './../../assets/icons/CashApp-logo.svg';

const Policies = () => {
  return (
    <div className='pb-[13.1%] md:flex'>
      <div className='w-full flex flex-col items-center pb-16 md:items-start md:pl-2 desktop:pl-8'>
        <h1 className='text-pink-900  text-3xl py-4 font-semibold  dark:text-neutral-100'>
          Policies
        </h1>
        <div>
          <ul className='w-full flex items-start justify-center'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' text-1xl w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-2xl'>
              A $30 non-refundable deposit is required to secure your spot!
              <span className='flex items-center'>
                <a
                  className='ml-2'
                  href='https://cash.app/$LayshaSerrano'
                  target='_blank'
                  rel='noreferrer'
                >
                  <CashApp className='w-9 animate-bounce	' />
                </a>
              </span>
            </p>
          </ul>
          <ul className='w-full flex items-center justify-center py-6'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-2xl'>
              Please wear a mask during your service
            </p>
          </ul>
          <ul className='w-full flex items-start justify-center py-6'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-2xl'>
              Location of service will be sent 24 hours prior to your
              appointment, I am located in the Northeast area
            </p>
          </ul>
          <ul className='w-full flex items-start justify-center py-6'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-2xl'>
              Please be mindful of my time, as I will of yours. If you need to
              cancel or reschedule, please do so at least 12 hours in advanced
            </p>
          </ul>
          <ul className='w-full flex items-start justify-center py-6'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-2xl'>
              Please come with bare nails unless you are expecting a soak off, I
              will not work over nails that were not done by me
            </p>
          </ul>
          <ul className='w-full flex items-start justify-center py-6'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-2xl'>
              Please no extra guests unless they are getting serviced as well
            </p>
          </ul>
          <ul className='w-full flex items-start justify-center py-6'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-2xl'>
              Any further questions, please feel free to contact me via email or
              on instagram, thank you for understanding!
            </p>
          </ul>
        </div>
      </div>
      {/* <div className='hidden md:w-full h-full md:flex flex-col items-center justify-center'>
        <img src={mask} alt='mask' />
      </div> */}
    </div>
  );
};

export default Policies;
