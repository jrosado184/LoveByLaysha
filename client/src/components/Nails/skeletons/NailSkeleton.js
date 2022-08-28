import React from 'react';
import image from './../../../assets/user.jpg.webp';

const NailSkeleton = ({ cards }) => {
  return (
    <div className='h-full'>
      <div className='w-full h-full flex flex-wrap justify-center  gap-6 pl-6 pb-20 pr-4 py-2 desktop:py-[1.7%]'>
        <div className='w-full flex justify-end pr-6 my-1'></div>
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
