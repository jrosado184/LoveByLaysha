import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NailSkeleton = ({ cards }) => {
  return (
    <div className='w-full h-full flex flex-wrap justify-center gap-6 py-4 pl-6 pr-4'>
      {Array(cards)
        .fill(0)
        .map((e, i) => (
          <div key={i}>
            <Skeleton width={170} height={210} />
          </div>
        ))}
    </div>
  );
};

export default NailSkeleton;
