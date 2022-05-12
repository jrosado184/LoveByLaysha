import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import plus from './../../assets/plus.svg';
import { storage } from './../../firebase/firebase';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import trash from './../../assets/trash.png';

const Nails = (logIn) => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);
  const [removeImage, setRemoveImage] = useState(false);

  const allImageRef = ref(storage, 'nails/');

  const handleImage = () => {
    if (image === null) return;
    const imageRef = ref(storage, `nails/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl((prev) => [...prev, url]);
      });
    });
  };

  const handleDeleteImage = (url) => {
    const imageName = ref(storage, url);
    const imageRef = ref(storage, `nails/${imageName.name}`);
    deleteObject(imageRef).then(() => {
      setImageUrl(imageUrl.filter((img) => img !== url));
    });
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [logIn]);

  useEffect(() => {
    listAll(allImageRef).then((res) => {
      res.items.map((item) =>
        getDownloadURL(item).then((url) => {
          setImageUrl((prev) => [...prev, url]);
        })
      );
    });
  }, []);

  return (
    <>
      {token && (
        <div className='flex flex-col items-end w-full h-14'>
          <button
            onClick={() => setRemoveImage(!removeImage)}
            className='mr-4 my-6 w-16 h-8 bg-pink-200 border border-pink-500 text-pink-800 shadow-sm rounded-sm'
          >
            {removeImage ? 'Finish' : 'Delete'}
          </button>
        </div>
      )}
      <div className='w-full h-full flex flex-wrap justify-center gap-6 py-2'>
        {imageUrl.map((nailData) => {
          return (
            <div className='nail-container w-[45%] h-72 my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full'>
              <div className='delete-nail-con'>
                {removeImage && (
                  <button
                    onClick={() => handleDeleteImage(nailData)}
                    className='delete-nail-btn'
                  >
                    <img className='w-2' src={trash} alt='trash' />
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
        {token && (
          <label className='w-[50%] h-72 flex flex-col items-center justify-center my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full cursor-pointer'>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-20' src={plus} alt='plus' />
              <input
                type='file'
                className='custom-file-input'
                onChange={(e) => setImage(e.target.files[0])}
              />
              <button
                onClick={handleImage}
                className='my-6 w-32 h-8 bg-pink-200 border border-pink-500 text-pink-800 shadow-sm rounded-sm'
              >
                Upload Image
              </button>
            </div>
          </label>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logIn: {
      loggedIn: state.login.loggedIn,
    },
  };
};

export default connect(mapStateToProps)(Nails);
