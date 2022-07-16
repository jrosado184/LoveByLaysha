import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

const NailSkeleton = ({ cards }) => {
  return (
    <div className='w-full h-full flex flex-wrap justify-center gap-6 pl-6 pr-4 py-2 desktop:py-[1.7%]'>
      {Array(cards)
        .fill(0)
        .map((e, i) => (
          <div
            className='nail-container flex w-[45%] h-[23.3%] sm:h-[19%] grow sm:grow-0 sm2:h-[24.3%] md:w-[30%] md:h-[23.3%] lg:w-[23%] desktop:w-[15%] desktop:grow-0 desktop:h-[30%]'
            key={i}
          >
            <div className='w-full flex flex-col flex-wrap grow rounded-md bg-neutral-400 h-[100%] dark:bg-neutral-900'></div>
          </div>
        ))}
    </div>
  );
};

export default NailSkeleton;
