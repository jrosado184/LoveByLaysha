import React from 'react';
import plus from './../../assets/plus.svg';

const FileUpload = ({ setImage, handleImage }) => {
  return (
    <>
      <label className='w-[50%] h-72 flex flex-col items-center justify-center my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full cursor-pointer'>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-20' src={plus} alt='plus' />
          <input
            type='file'
            className='custom-file-input'
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            onClick={handleImage}
            className='my-6 w-32 h-8 bg-pink-200 border border-pink-500 text-pink-800 shadow-sm rounded-sm'
          >
            Upload Image
          </button>
        </div>
      </label>
    </>
  );
};

export default FileUpload;
