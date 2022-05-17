import React, { useState, useEffect } from 'react';
import trash from './../../assets/trash.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import NailSkeleton from './NailSkeleton';

const NailImages = ({ imageUrl, removeImage, handleDeleteImage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='w-full h-full flex flex-wrap justify-center gap-6 py-4 pl-6 pr-4'>
        {imageUrl.map((nailData) => {
          return (
            <div
              key={nailData}
              className='nail-container w-[45%] h-60 my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full'
            >
              <div className='delete-nail-con'>
                {removeImage && (
                  <button
                    onClick={() => handleDeleteImage(nailData)}
                    className='delete-nail-btn'
                  >
                    <img
                      onClick={() => setShowModal(!showModal)}
                      className='w-2'
                      src={trash}
                      alt='trash'
                    />
                  </button>
                )}
              </div>
              <img
                key={nailData}
                className='h-full w-full'
                src={nailData}
                alt=''
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NailImages;
