import React from 'react';
import image from './../../../assets/user.jpg.webp';

const NailSkeleton = ({ cards }) => {
  return (
    <div className='h-full'>
      <div className='w-full h-full flex flex-wrap justify-center  gap-6 pl-6 pb-20 pr-4 py-2 desktop:py-[1.7%]'>
        {Array(cards)
          .fill(0)
          .map((e, i) => (
            <div
              key={i}
              className='flex gap-8 max-h-[28vh] max-w-[85%] sm:max-w-[45%] sm:max-h-[19vh] grow sm2:max-w-[29%] sm2:max-h-[24vh] lg:max-w-[20%] lg:max-h-[28vh] desktop:w-[15%] desktop:max-h-[30vh] desktop:grow-0'
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
