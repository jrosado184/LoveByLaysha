import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

const UploadModal = ({ image, setImage, handleImage }) => {
  const [modal, setModal] = useState(false);

  const Upload = async () => {
    await handleImage();
    setImage((prev) => !prev);
  };

  useEffect(() => {
    image && setModal(!modal);
  }, [image]);

  return (
    <div className='upload-modal'>
      <Modal title='Upload Image' visible={true}></Modal>
      {/* <div className='flex justify-center'>
        <div className='modal-box rounded-md'>
          <p className='font-bold my-2 w-[100%] text-center'>Upload file?</p>
          <div className='flex justify-evenly w-full my-6'>
            <button
              onClick={() => setImage((prev) => !prev)}
              className='border border-pink-400 bg-pink-200 text-pink-800 rounded-md w-20'
            >
              Cancel
            </button>
            <button
              onClick={Upload}
              className='border border-pink-400 bg-pink-200 text-pink-800 rounded-md w-20'
            >
              Upload
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UploadModal;
