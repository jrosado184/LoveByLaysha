import React from 'react';

const Loading = () => {
  return (
    <div className='h-[85.6vh] desktop:h-[75.3vh]'>
      <div className='w-full h-96 flex flex-col justify-end items-center desktop:justify-center'>
        <span className=' animate-spin w-20 h-20 rounded-full border-y-2 bg-gradient-to-r from-pink-200 to-pink-400 border-pink-400 mb-12 flex items-center justify-center dark:bg-gradient-to-r dark:from-neutral-500 dark:to-neutral-900 dark:border-neutral-900'>
          <span className='w-16 h-16 border bg-white rounded-full dark:bg-neutral-700'></span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
