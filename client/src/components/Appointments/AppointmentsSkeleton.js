import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AppointmentsSkeleton = ({ card }) => {
  return (
    <div className='flex flex-col items-center my-2 w-full'>
      {Array(card)
        .fill(0)
        .map((item, i) => (
          <div
            key={i}
            className='w-full flex justify-center items-center flex-col my-1 gap-8'
          >
            <div className='w-full h-24 border border-gray-300 rounded-md flex flex-col'>
              <div className='w-full flex justify-between'>
                <div className='h-fit'>
                  <h1 className='ml-4 py-1 font-semibold'>
                    <Skeleton width={120} height={8} />
                  </h1>
                </div>
                <p className='mr-6 py-1'>
                  <Skeleton width={120} height={8} />
                </p>
              </div>
              <div className='w-full pl-4 my-2 flex justify-between'>
                <p className='w-full'>
                  <Skeleton width={70} height={8} />
                </p>
                <div className='cursor-pointer w-full flex h-fit items-center justify-end my-6 ml-12 gap-2 mr-4'>
                  <p className='flex cursor-pointer'>
                    <Skeleton width={110} height={8} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AppointmentsSkeleton;
