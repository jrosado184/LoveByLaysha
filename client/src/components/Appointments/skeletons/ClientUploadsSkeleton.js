import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ClientUploadsSkeleton = () => {
  return (
    <div className='desktop:w-full mb-12'>
      <div className='desktop:flex flex-col items-start justify-start h-full'>
        <div className='flex flex-col items-center justify-center w-full pb-6 desktop:py-12'>
          <div className='sm:w-96 desktop:w-[50%] h-96'>
            <Skeleton height={380} />
          </div>
          <div className='w-60 my-6'>
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientUploadsSkeleton;
