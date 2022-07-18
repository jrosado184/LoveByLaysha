import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

const NailSkeleton = ({ cards }) => {
  return (
    <div className='w-full h-full flex flex-wrap justify-center gap-6 pl-6 pr-4 py-8 desktop:py-[1.7%]'>
      {Array(cards)
        .fill(0)
        .map((e, i) => (
          <div
            className='nail-container w-[45%] h-[23.3%] sm:h-[19%] grow sm:grow-0 sm2:h-[24.3%] md:w-[30%] md:h-[23.3%] lg:w-[23%] desktop:w-[15%] desktop:grow-0 desktop:h-[30%]'
            key={i}
          >
            <Skeleton height={212} />
          </div>
        ))}
    </div>
  );
};

export default NailSkeleton;
