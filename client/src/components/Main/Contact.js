import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import instagram from '../../assets/instagram.svg';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='flex h-[90vh] flex-col pb-20 lg:flex-row w-[100%] desktop:h-[75.3vh] items-center'>
      <div className='w-[100%] lg:w-[50%]'>
        <form
          className='flex flex-col justify-center items-center lg:w-[80%]'
          ref={form}
        >
          <h1 className='my-6 font-semibold text-pink-900 desktop:my-0 dark:text-neutral-100'>
            Contact Me
          </h1>
          <input
            name='user_name'
            className='pl-3 my-4 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md dark:border-neutral-900 dark:bg-neutral-700 dark:placeholder:text-white md:ml-6'
            placeholder='Name'
          />
          <input
            name='user_email'
            type='email'
            className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md dark:border-neutral-900 dark:bg-neutral-700 dark:placeholder:text-white md:ml-6'
            placeholder='Email'
          />
          <textarea
            placeholder='Message'
            className='pl-3 my-4 w-[88%] pb-24 py-3 rounded-lg border-2 border-pink-300 shadow-md dark:border-neutral-900 dark:bg-neutral-700 dark:placeholder:text-white md:ml-6'
            name='message'
          />
          <input
            className='w-20 h-8 my-4 border-2 border-pink-300 bg-pink-100 text-rose-500 rounded-full sm2:ml-[70%] md:ml-[74%] dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 lg:ml-[79%]'
            type='button'
            value='Send'
            onClick={sendEmail}
          />
        </form>
      </div>
      <div className='w-[100%] my-6 lg:w-[50%] flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center w-full'>
          <h2 className='text-lg text-pink-900 dark:text-neutral-100'>
            Connect with me
          </h2>
          <a
            href='https://www.instagram.com/lovebylaysha/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='w-28' src={instagram} alt='instagram' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
