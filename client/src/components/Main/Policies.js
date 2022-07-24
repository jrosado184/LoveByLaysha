import React from 'react';
import { ReactComponent as Star } from './../../assets/icons/star.svg';
import { ReactComponent as CashApp } from './../../assets/icons/CashApp-logo.svg';

const Policies = () => {
  return (
    <div className='md:flex h-[100vh]'>
      <div className='w-[93%] ml-2 flex flex-col items-center pb-16 md:items-start md:ml-6 desktop:w-[100%]'>
        <h1 className='text-pink-900  text-[1.4rem]  my-1 font-semibold underline  dark:text-neutral-100'>
          Policies
        </h1>
        <div>
          <ul className='w-full flex items-center justify-center py-4'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' text-[1.3rem] w-full ml-2 flex text-pink-900 dark:text-neutral-100 md:text-[1.4rem]'>
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
          <p className='text-pink-900 dark:text-neutral-100 ml-6'>
            -The deposit is included in your service even if you reschedule
          </p>
          <ul className='w-full flex items-center justify-center py-4'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full text-[1.3rem] ml-2 flex text-pink-900 dark:text-neutral-100 md:text-[1.4rem]'>
              Please wear a mask during your service
            </p>
          </ul>
          <p className='text-pink-900 dark:text-neutral-100 ml-6'>
            -It's for your own safety and also my own!
          </p>
          <ul className='w-full flex items-center justify-center py-4'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full text-[1.3rem] ml-2 flex text-pink-900 dark:text-neutral-100 md:text-[1.4rem]'>
              Location will be sent 24 hours prior to your appointment, I am
              located in the Northeast area
            </p>
          </ul>
          <p className='text-pink-900 dark:text-neutral-100 ml-6'>
            -If for some reason you need the location sooner for travel reasons,
            please reach out to me either via instagram or email
          </p>
          <ul className='w-full flex items-center justify-center py-4'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full text-[1.3rem] ml-2 flex text-pink-900 dark:text-neutral-100 md:text-[1.4rem]'>
              Please be mindful of my time, as I will of yours. If you need to
              cancel or reschedule, please do so at least 12 hours in advanced
            </p>
          </ul>
          <p className='text-pink-900 dark:text-neutral-100 ml-6'>
            -This allows me to plan ahead and fill any openings scheduled for
            this day
          </p>
          <ul className='w-full flex items-center justify-center py-4'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full text-[1.3rem] ml-2 flex text-pink-900 dark:text-neutral-100 md:text-[1.4rem]'>
              Please come with bare nails unless you are expecting a soak off, I
              will not work over nails that were not done by me
            </p>
          </ul>
          <p className='text-pink-900 dark:text-neutral-100 ml-6'>
            -It takes more time If you are expecting a soak and I am not
            informed, please plan accordingly
          </p>
          <ul className='w-full flex items-center justify-center py-4'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full text-[1.3rem] ml-2 flex text-pink-900 dark:text-neutral-100 md:text-[1.4rem]'>
              Please no extra guests unless they are getting serviced as well
            </p>
          </ul>
          <p className='text-pink-900 dark:text-neutral-100 ml-6'>
            -Please don't book one appointment for multiple people, book one per
            person so that I can plan accordingly
          </p>
          <ul className='w-full flex items-center justify-center py-4'>
            <Star className='w-7 text-pink-900 dark:text-neutral-100' />
            <p className=' w-full text-[1.3rem] ml-2 flex text-pink-900 dark:text-neutral-100 md:text-[1.4rem]'>
              Any further questions, please feel free to contact me via email or
              on instagram, thank you for understanding!
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policies;
