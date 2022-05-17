import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeaderSkeleton = () => {
  return (
    <div className=''>
      <div className='user-image my-4 ml-8 w-44 h-44 md:w-44'>
        <Skeleton circle width={166} height={163} />
      </div>
    </div>
  );
};

export default HeaderSkeleton;
