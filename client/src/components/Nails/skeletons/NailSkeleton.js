import React from 'react';
import image from './../../../assets/user.jpg.webp';

const NailSkeleton = ({ cards }) => {
  return (
    <div className='h-full'>
      <div className='w-full h-full flex flex-wrap justify-center  gap-6 pl-6 pb-20 pr-4 py-2 desktop:py-[1.7%]'>
        <div
          className={
            localStorage.getItem('token')
              ? 'w-full flex justify-end desktop:hidden'
              : 'hidden'
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8 text-pink-900 dark:text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
        </div>
        {Array(cards)
          .fill(0)
          .map((e, i) => (
            <div
              key={i}
              className='flex grow h-[28%] max-w-[85%] sm:grow-0 sm:w-[45%] sm:h-[19%] sm2:w-[29%] sm2:h-[24%] lg:w-[20%] lg:h-[28%] desktop:w-[15%] desktop:h-[30%] desktop:grow-0'
            >
              <img
                width={400}
                height={400}
                className='rounded-md border-2 border-neutral-400 dark:border-neutral-900 opacity-80'
                src={image}
                alt='loading'
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NailSkeleton;
