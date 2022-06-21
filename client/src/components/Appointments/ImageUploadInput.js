import React from 'react';

const ImageUploadInput = ({ setImage }) => {
  return (
    <div className='flex justify-start items-center w-full py-2'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col justify-center items-center w-80 h-46 bg-gray-50 rounded-lg border-2 border-pink-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-gray-100 dark:border-neutral-900 dark:hover:border-gray-500 dark:hover:bg-neutral-600'
      >
        <div className='flex flex-col justify-center items-center pt-3 pb-6'>
          <svg
            className='mb-3 w-10 h-10 text-pink-300 dark:text-neutral-100'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
            ></path>
          </svg>
          <p className='mb-2 text-sm text-pink-900 dark:text-neutral-100'>
            <span className='font-semibold'>Click to upload</span> or drag and
            drop
          </p>
          <p className='text-xs text-pink-900 dark:text-neutral-100'>
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          id='dropzone-file'
          type='file'
          className='hidden'
        />
      </label>
    </div>
  );
};

export default ImageUploadInput;
