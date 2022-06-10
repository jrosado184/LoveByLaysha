import React from 'react';

const Loading = () => {
  return (
    <div className='w-full h-96 flex flex-col justify-end items-center desktop:justify-center'>
      <span className=' animate-spin w-20 h-20 rounded-full border-y-2 bg-gradient-to-r from-pink-200 to-pink-400 border-pink-400 mb-12 flex items-center justify-center'>
        <spa className='w-16 h-16 border bg-white rounded-full'></spa>
      </span>
    </div>
  );
};

export default Loading;
