import React, { useEffect, useState } from 'react';
import NailImages from './NailImages';
import UploadModal from './UploadModal';
import { connect } from 'react-redux';
import { storage } from '../../firebase/firebase';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import NailSkeleton from './NailSkeleton';

const Nails = (logIn) => {
  const [token, setToken] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

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
    listAll(allImageRef).then((res) => {
      res.items.map((item) =>
        getDownloadURL(item).then((url) => {
          setImageUrl((prev) => [...prev, url]);
        })
      );
    });
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, [logIn]);

  return (
    <>
      {image && (
        <UploadModal
          setImage={setImage}
          image={image}
          handleImage={handleImage}
        />
      )}
      {token && (
        <div className='flex items-center justify-center w-full h-14 shadow-md sticky top-0 bg-white'>
          <div className='w-[50%] h-full  text-pink-800 border border-pink-200 flex justify-center items-center cursor-pointer'>
            <label
              className='cursor-pointer'
              onClick={(e) => setImage(e.target.files[0])}
            >
              Upload Images
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type='file'
                className='custom-file-input'
              />
            </label>
          </div>
          <div className='w-[50%] h-full border border-pink-200 flex justify-center cursor-pointer'>
            <button
              onClick={() => setRemoveImage(!removeImage)}
              className='text-pink-800'
            >
              {removeImage ? 'Finish' : 'Remove Images'}
            </button>
          </div>
        </div>
      )}
      {loading && <NailSkeleton cards={imageUrl.length} />}
      <NailImages
        handleDeleteImage={handleDeleteImage}
        imageUrl={imageUrl}
        token={token}
        removeImage={removeImage}
      />
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
