import React from 'react';

const NailUploadNav = ({ token, setImage, setRemoveImage, removeImage }) => {
  return (
    <div className='hidden desktop:block'>
      {token && (
        <div className='flex items-center justify-center w-full h-14 shadow-md sticky top-0 bg-white'>
          <div className='w-[50%] h-full  text-pink-800 border border-pink-200 flex justify-center items-center cursor-pointer'>
            <label
              className='cursor-pointer'
              onClick={(e) => setImage(e.target.files[0])}
            >
              Upload Images
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type='file'
                className='custom-file-input'
              />
            </label>
          </div>
          <div className='w-[50%] h-full border border-pink-200 flex justify-center cursor-pointer'>
            <button
              onClick={() => setRemoveImage(!removeImage)}
              className='text-pink-800'
            >
              {removeImage ? 'Finish' : 'Remove Images'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NailUploadNav;
