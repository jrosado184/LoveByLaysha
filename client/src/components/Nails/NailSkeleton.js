import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NailSkeleton = ({ cards }) => {
  return (
    <div className='w-full h-full flex flex-wrap justify-center gap-6 pl-6 pr-4 py-2 desktop:py-[1.7%]'>
      {Array(cards)
        .fill(0)
        .map((e, i) => (
          <div
            className='nail-container flex w-[45%] h-[18%] grow sm:grow-0 md:w-[20%] md:h-[17%] desktop:w-[15%] desktop:h-[30%] desktop:grow-0'
            key={i}
          >
            <div className='w-full flex flex-col flex-wrap grow rounded-md bg-neutral-400 h-[100%] dark:bg-neutral-900'></div>
          </div>
        ))}
    </div>
  );
};

export default NailSkeleton;
