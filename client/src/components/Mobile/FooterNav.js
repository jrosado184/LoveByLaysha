import React from 'react';
import plus from './../../assets/plus.svg';

const FooterNav = ({ setImage }) => {
  return (
    <div className='flex  justify-center items-center bg-pink-200 w-full border-y border-pink-300 h-20 desktop:hidden'>
      <div className='bottom-2 left-40 w-12 h-12  bg-pink-300 border border-white rounded-full'>
        <label
          className='cursor-pointer'
          onClick={(e) => setImage(e.target.files[0])}
        >
          <img src={plus} alt='' />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            className='custom-file-input'
          />
        </label>
      </div>
    </div>
  );
};

export default FooterNav;
