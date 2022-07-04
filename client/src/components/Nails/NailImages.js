import React, { useState } from 'react';
import { ReactComponent as Trash } from './../../assets/trash.svg';
import 'react-loading-skeleton/dist/skeleton.css';

const NailImages = ({ imageUrl, removeImage, handleDeleteImage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='w-full h-full flex flex-wrap justify-center gap-6 pl-6 pr-4 py-2 desktop:py-6 desktop:pb-[2%]'>
      {imageUrl.map((nailData, index) => {
        return (
          <div
            key={index}
            className='nail-container flex w-[45%] h-auto md:w-[30%] lg:w-[20%] lg:grow desktop:w-[12%]'
          >
            <div className='delete-nail-con'>
              {removeImage && (
                <button
                  onClick={() => handleDeleteImage(nailData)}
                  className='delete-nail-btn'
                >
                  <Trash
                    onClick={() => setShowModal(!showModal)}
                    className='w-3'
                  />
                </button>
              )}
            </div>
            <img
              key={nailData}
              className='h-auto w-full rounded-md border-2 object-scale-down border-gray-400'
              src={nailData}
              alt=''
            />
          </div>
        );
      })}
    </div>
  );
};

export default NailImages;
