import React from 'react';

const Loading = () => {
  return (
    <div className='w-full h-[84.54vh] flex flex-col justify-center items-center xr:h-[87vh] desktop:justify-center'>
      <span className=' animate-spin w-20 h-20 rounded-full border-y-2 bg-gradient-to-r from-pink-200 to-pink-400 border-pink-400 mb-12 flex items-center justify-center dark:bg-gradient-to-r dark:from-neutral-100 dark:to-neutral-900 dark:border-neutral-900'>
        <span className='w-16 h-16 border bg-white rounded-full dark:bg-neutral-800'></span>
      </span>
    </div>
  );
};

export default Loading;
