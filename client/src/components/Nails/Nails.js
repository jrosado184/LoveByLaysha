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
import NailUploadNav from './NailUploadNav';
import NailSkeleton from './NailSkeleton';
import FooterNav from './../Mobile/FooterNav';
import { ReactComponent as Dots } from './../../assets/dots.svg';
import ToggleTheme from './../Main/ToggleTheme';

const Nails = ({ logIn, darkMode, setDarkMode }) => {
  const [token, setToken] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [onNailComp, setOnNailComp] = useState(false);

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
          url = url.replace(
            'https://firebasestorage.googleapis.com/v0/b/lovebylaysha-be39b.appspot.com',
            `${process.env.REACT_APP_IMAGEKIT}/tr:w-250,h-250,dpr-2`
          );
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
    setOnNailComp(true);
  }, [logIn]);

  return (
    <div className='pb-20 desktop:pb-0'>
      <div
        className={
          localStorage.getItem('token')
            ? 'hidden'
            : 'w-full flex justify-end pr-6 py-4 pb-0'
        }
      >
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {localStorage.getItem('token') && (
        <div
          className={
            removeImage
              ? 'w-full h-8 flex justify-end items-center pr-6 py-6 sticky top-[6.5%] bg-white z-20 dark:bg-neutral-800 desktop:hidden'
              : 'w-full h-8 my-4 flex justify-end items-center pr-6 sticky top-[6.5%] bg-white z-20 dark:bg-neutral-800 desktop:hidden'
          }
        >
          {removeImage && (
            <p className='mr-12 text-pink-900 font-semibold dark:text-neutral-100'>
              Finished Deleting Images?
            </p>
          )}
          {removeImage && (
            <p
              onClick={() => setRemoveImage(!removeImage)}
              className='text-pink-500 w-[16%] flex justify-center items-center bg-pink-200 border border-pink-400 rounded-full dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100'
            >
              Done
            </p>
          )}
          <Dots
            onClick={() => setRemoveImage(!removeImage)}
            className={
              removeImage
                ? 'hidden'
                : 'w-10 h-12 text-pink-900 dark:text-neutral-100'
            }
          />
        </div>
      )}
      {image && (
        <UploadModal
          setImage={setImage}
          image={image}
          handleImage={handleImage}
        />
      )}
      <NailUploadNav
        token={token}
        removeImage={removeImage}
        setImage={setImage}
        setRemoveImage={setRemoveImage}
      />
      {loading && <NailSkeleton cards={imageUrl.length} />}
      <NailImages
        handleDeleteImage={handleDeleteImage}
        imageUrl={imageUrl}
        token={token}
        removeImage={removeImage}
      />
      {localStorage.getItem('token') && (
        <div className='fixed bottom-0 w-full z-20'>
          <FooterNav
            darkMode={darkMode}
            setImage={setImage}
            onNailComp={onNailComp}
          />
        </div>
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
