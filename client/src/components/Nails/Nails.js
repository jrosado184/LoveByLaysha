import NailData from "../data/NailData";
import React from "react";

const Nails = () => {
  return (
    <div className='w-full h-full flex flex-wrap justify-center gap-6 py-2'>
      {NailData.map((nailData) => {
        return (
          <img
            key={nailData}
            className='sm:w-[45%] h-72 my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full'
            src={nailData}
            alt=''
          />
        );
      })}
    </div>
  );
};

export default Nails;

// 'w-100 h-80 flex flex-row flex-wrap items-center justify-center gap-4'

// sm:w-[45%] h-full my-4 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full
