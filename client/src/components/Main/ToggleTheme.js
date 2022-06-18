import React from 'react';
import { Switch } from '@headlessui/react';

const ToggleTheme = ({ darkMode, setDarkMode }) => {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    !darkMode
      ? localStorage.setItem('theme', 'dark')
      : localStorage.setItem('theme', 'light');
  };

  return (
    <>
      <Switch
        checked={darkMode}
        onChange={handleDarkMode}
        className={`${
          darkMode ? 'bg-neutral-600' : 'bg-gray-400'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            darkMode ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
    </>
  );
};

export default ToggleTheme;
