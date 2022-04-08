import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <>
      <h1 className='text-center my-4'>Contact Me</h1>
      <form className='flex flex-col justify-center items-center' ref={form}>
        <input
          name='user_name'
          className='pl-3 my-2 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6'
          placeholder='Name'
        />
        <input
          name='user_email'
          type='email'
          className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6'
          placeholder='Email'
        />
        <textarea
          placeholder='Message'
          className='pl-3 my-6 w-[88%] pb-24 py-3 rounded-lg border-2 border-pink-300 shadow-md md:ml-6'
          name='message'
        />
        <input
          className='w-20 h-8 my-3 border-2 border-pink-300 bg-pink-100 text-rose-500 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[80%]'
          type='button'
          value='Send'
          onClick={sendEmail}
        />
      </form>
    </>
  );
};

export default Contact;
