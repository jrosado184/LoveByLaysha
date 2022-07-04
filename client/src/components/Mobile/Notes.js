import React from 'react';
import ToggleTheme from '../Main/ToggleTheme';

const Notes = ({ darkMode, setDarkMode }) => {
  return (
    <div className='h-[93.3vh]'>
      <div className='w-full h-0 flex justify-end py-6 pr-4 '>
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-pink-900 dark:text-neutral-100'>Notes</h1>
      </div>
    </div>
  );
};

export default Notes;
