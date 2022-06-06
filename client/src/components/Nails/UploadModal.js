import React, { useEffect, useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

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
      <Rodal
        animation={'zoom'}
        visible={image ? true : false}
        onClose={() => setModal(false)}
        showCloseButton={false}
        width={300}
        height={120}
      >
        <p className='font-bold my-2 w-[100%] text-center'>Upload file?</p>
        <div className='flex justify-evenly py-5'>
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
      </Rodal>
    </div>
  );
};

export default UploadModal;
