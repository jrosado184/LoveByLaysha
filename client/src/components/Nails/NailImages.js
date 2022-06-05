import React, { useState } from 'react';
import trash from './../../assets/trash.png';
import 'react-loading-skeleton/dist/skeleton.css';

const NailImages = ({ imageUrl, removeImage, handleDeleteImage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='w-full h-full flex flex-wrap justify-center gap-6 py-4 pl-6 pr-4'>
        {imageUrl.map((nailData) => {
          return (
            <div
              key={nailData}
              className='nail-container w-[45%] h-60 my-2 shadow-md rounded-sm sm2:w-40 lg:w-[13%]'
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
                className='h-full w-full rounded-md border-2 border-gray-400'
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
