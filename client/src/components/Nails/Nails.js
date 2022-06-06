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
import dots from './../../assets/dots.svg';

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
    <div className='pb-20 py-2 desktop:py-1'>
      {localStorage.getItem('token') && (
        <div className='w-full h-8 flex justify-end pr-6 desktop:hidden'>
          <img className='w-10 h-fit' src={dots} alt='dots' />
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
        <div className='fixed bottom-0 w-full z-10 y-20'>
          <FooterNav setImage={setImage} />
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
