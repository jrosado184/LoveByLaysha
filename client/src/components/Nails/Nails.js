import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import trash from './../../assets/trash.png';
import FileUpload from './FileUpload';
import { storage } from '../../firebase/firebase';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

const Nails = (logIn) => {
  const [token, setToken] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [image, setImage] = useState(null);
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

  useEffect(() => {
    listAll(allImageRef).then((res) => {
      res.items.map((item) =>
        getDownloadURL(item).then((url) => {
          setImageUrl((prev) => [...prev, url]);
        })
      );
    });
  }, []);

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

  return (
    <>
      {token && (
        <div className='flex flex-col items-end w-full h-14'>
          <button
            onClick={() => setRemoveImage(!removeImage)}
            className='mr-7 my-6 w-16 h-8 bg-pink-200 border border-pink-500 text-pink-800 shadow-sm rounded-sm'
          >
            {removeImage ? 'Finish' : 'Delete'}
          </button>
        </div>
      )}
      <div className='w-full h-full flex flex-wrap justify-center gap-6 py-4 pl-6 pr-4'>
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
        {token && <FileUpload setImage={setImage} handleImage={handleImage} />}
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
