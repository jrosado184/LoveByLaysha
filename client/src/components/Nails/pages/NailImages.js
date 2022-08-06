import React, { useState } from "react";

const NailImages = ({ imageUrl, removeImage, handleDeleteImage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-full'>
      <div className='w-full h-full flex flex-wrap justify-center  gap-6 pl-6 pb-20 pr-4 py-2 desktop:py-[1.7%]'>
        {imageUrl.map((nailData, index) => {
          return (
            <div
              key={index}
              className='flex grow h-[28%] max-w-[85%] sm:grow-0 sm:w-[45%] sm:h-[19%] sm2:w-[29%] sm2:h-[24%] lg:w-[20%] lg:h-[28%] desktop:w-[15%] desktop:h-[30%] desktop:grow-0'
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
                width={400}
                height={400}
                key={nailData}
                className='rounded-md border-2 border-neutral-400 dark:border-neutral-900'
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
