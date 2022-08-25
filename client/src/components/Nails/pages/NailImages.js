import React, { useState } from "react";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";

const NailImages = ({ imageUrl, removeImage, handleDeleteImage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-full'>
      <div className='w-full h-full flex flex-wrap justify-center  gap-6 pl-6 pb-20 pr-4 py-2 desktop:py-[1.7%]'>
        {imageUrl.map((nailData, index) => {
          return (
            <div
              key={index}
              className='flex grow max-w-[85%] sm:grow-0 sm:w-[45%] sm:h-[19%] sm2:w-[29%] sm2:h-[24%] lg:w-[20%] lg:h-[28%] desktop:w-[15%] desktop:h-[30%] desktop:grow-0'
            >
              <div className='delete-nail-con'>
                {removeImage && (
                  <button
                    className='bg-black w-6 h-6 rounded-full absolute'
                    onClick={() =>
                      handleDeleteImage(
                        nailData,
                        `https://firebasestorage.googleapis.com/v0/b/lovebylaysha-be39b.appspot.com/o/${
                          nailData.split("/")[6]
                        }`
                      )
                    }
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </button>
                )}
              </div>
              <IKImage
                urlEndpoint={process.env.REACT_APP_IMAGEKIT}
                src={nailData}
                key={nailData}
                className='rounded-md border-2 border-neutral-400 dark:border-neutral-900'
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
