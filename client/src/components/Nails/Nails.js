import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import plus from './../../assets/plus.svg';
import { storage } from './../../firebase/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const Nails = (logIn) => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);

  const allImageRef = ref(storage, 'nails/');

  const handleImage = () => {
    if (image === null) return;
    const imageRef = ref(storage, `nails/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl((prev) => [...prev, url]);
      });
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
    <div className='w-full h-full flex flex-wrap justify-center gap-6 py-2'>
      {imageUrl.map((nailData) => {
        return (
          <img
            key={v4()}
            className='sm:w-[45%] h-72 my-2 border-2 border-gray-400 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full'
            src={nailData}
            alt=''
          />
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
              className='w-32 h-8 border border-black rounded-full bg-pink-400 text-white'
            >
              Upload Image
            </button>
          </div>
        </label>
      )}
    </div>
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
