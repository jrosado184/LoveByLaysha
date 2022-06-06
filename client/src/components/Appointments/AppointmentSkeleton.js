import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AppointmentSkeleton = () => {
  return (
    <div className='w-full h-100 py-6 flex flex-col desktop:ml-6'>
      <div className='w-full flex justify-evenly desktop:w-[100%] justify-start py-4'>
        <div className='flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-evenly desktop:w-[100%] justify-start py-4'>
        <div className='flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-evenly desktop:w-[100%] justify-start py-4'>
        <div className='flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
      </div>
      <div className='shadow-lg w-full flex justify-evenly desktop:w-[100%] justify-start py-4'>
        <div className='shadow-lg flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
        <div className='shadow-lg flex flex-col justify-center items-center w-40 h-full rounded-md md:w-60 h-40 desktop:w-1/2'>
          <div className='w-40 desktop:w-full'>
            <Skeleton height={158} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSkeleton;
