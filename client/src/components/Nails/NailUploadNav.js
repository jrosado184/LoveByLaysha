import React from "react";

const NailUploadNav = ({ token, setImage, setRemoveImage, removeImage }) => {
  return (
    <div className='hidden desktop:block'>
      {token && (
        <div className='flex items-center justify-center w-full h-14 shadow-md sticky top-0 bg-white dark:bg-neutral-700'>
          <div className='w-[50%] h-full  text-pink-800 border border-pink-200 flex justify-center items-center cursor-pointer dark:text-neutral-100 dark:border-neutral-900'>
            <label
              className='cursor-pointer dark:text-neutral-100'
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
          <div
            onClick={() => setRemoveImage(!removeImage)}
            className='w-[50%] h-full border border-pink-200 flex justify-center cursor-pointer dark:border-neutral-900'
          >
            <button className='text-pink-800 dark:text-neutral-100'>
              {removeImage ? "Finish" : "Remove Images"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NailUploadNav;
