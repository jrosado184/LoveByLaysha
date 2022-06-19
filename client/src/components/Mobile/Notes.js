import React from 'react';
import ToggleTheme from '../Main/ToggleTheme';

const Notes = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <div className='w-full h-0 flex justify-end py-6 pr-4'>
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className='h-[50vh] desktop:h-[75.3vh]'>
        <div className='w-full h-full my-80 flex justify-center items-start desktop:my-0 desktop:items-center'>
          <h1 className='text-pink-900 dark:text-neutral-100'>Notes</h1>
        </div>
      </div>
    </div>
  );
};

export default Notes;
