import React, { useState, useRef } from 'react';
import { ReactComponent as Trash } from './../../../assets/trash.svg';
import 'react-loading-skeleton/dist/skeleton.css';

const NailImages = ({ imageUrl, removeImage, handleDeleteImage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-[100vh]'>
      <div className='w-full h-fit flex flex-wrap justify-center gap-6 pl-6 pb-20 pr-4 py-2 desktop:py-[1.7%]'>
        {imageUrl.map((nailData, index) => {
          return (
            <div
              key={index}
              className='grow flex sm:max-w-[46%] sm:h-[20vh] lg:max-w-[17%] lg:h-[20%] desktop:max-w-[15%] desktop:h-[30vh]'
            >
              {/* <div className='delete-nail-con'>
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
            </div> */}
              <img
                key={nailData}
                className='h-full w-full rounded-md border-2 border-neutral-400 dark:border-neutral-900'
                src={nailData}
                alt=''
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NailImages;
