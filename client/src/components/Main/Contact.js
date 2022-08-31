import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import instagram from "../../assets/instagram.svg";

export const Contact = () => {
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    inputs.user_name &&
      inputs.user_email &&
      inputs.message &&
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
            setSuccess("Message Delivered!");
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <div className='pb-[50%] desktop:pb-[8.9%]'>
      <div className='flex flex-col md:flex-row w-[100%] h-full items-center desktop:pb-[12.3%]'>
        <div className='w-[100%] lg:w-[50%]'>
          <form
            className='flex my-4 flex-col justify-center items-center lg:w-[100%]'
            ref={form}
          >
            <h1 className='my-2 font-bold text-2xl text-pink-900 dark:text-neutral-100'>
              Contact me
            </h1>
            <input
              name='user_name'
              className='pl-3 my-4 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6 dark:border-neutral-900 dark:bg-neutral-700 desktop:w-[70%]'
              placeholder='Name'
              value={inputs.name}
              onChange={handleInputs}
            />
            <input
              name='user_email'
              type='email'
              className='pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6 dark:border-neutral-900 dark:bg-neutral-700 desktop:w-[70%]'
              placeholder='Email'
              value={inputs.email}
              onChange={handleInputs}
            />
            <textarea
              placeholder='Message'
              className='pl-3 my-4 w-[88%] pb-24 py-3 rounded-lg border-2 border-pink-300 shadow-md md:ml-6 dark:border-neutral-900 dark:bg-neutral-700 desktop:w-[70%]'
              name='message'
              value={inputs.message}
              onChange={handleInputs}
            />
            <input
              className='w-20 h-8 my-4 border-2 border-pink-300 bg-pink-100 text-rose-500 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[78%] desktop:ml-[63%] dark:border-neutral-900 dark:bg-neutral-700 dark:text-neutral-100'
              type='button'
              value='Send'
              onClick={sendEmail}
            />
          </form>
          <p className='w-full flex justify-center text-pink-900 dark:text-neutral-100 desktop:justify-end desktop:pr-24'>
            {success}
          </p>
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
              <img className='w-full' src={instagram} alt='instagram' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
