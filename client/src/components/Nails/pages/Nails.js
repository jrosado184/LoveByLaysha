import React, { useEffect, useState } from "react";
import NailImages from "./NailImages";
import UploadModal from "./../modals/UploadModal";
import { connect } from "react-redux";
import { storage } from "../../../firebase/firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import NailUploadNav from "./../modals/NailUploadNav";
import Loading from "./../../Appointments/pages/Loading";
import FooterNav from "../../Mobile/FooterNav";
import ToggleTheme from "../../Main/ToggleTheme";

const Nails = ({ logIn, darkMode, setDarkMode }) => {
  const [token, setToken] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [onNailComp, setOnNailComp] = useState(false);

  const allImageRef = ref(storage, "nails/");

  const handleImage = () => {
    if (image === null) return;
    const imageRef = ref(storage, `nails/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        url = url.replace(
          "https://firebasestorage.googleapis.com/v0/b/lovebylaysha-be39b.appspot.com",
          `${process.env.REACT_APP_IMAGEKIT}/tr:w-250,h-250,dpr-2`
        );
        setImageUrl((prev) => [...prev, url]);
      });
    });
  };

  const handleDeleteImage = (url, firebaseURL) => {
    const imageKitImageUrl = `${
      process.env.REACT_APP_IMAGEKIT
    }/tr:w-250,h-250,dpr-2/o/${url.split("/")[6]}`;
    const imageName = ref(storage, firebaseURL);
    const imageRef = ref(storage, `nails/${imageName.name}`);
    console.log(imageRef);
    deleteObject(imageRef).then(() => {
      setImageUrl(imageUrl.filter((img) => img !== imageKitImageUrl));
    });
  };

  useEffect(() => {
    listAll(allImageRef).then((res) => {
      res.items.map((item) =>
        getDownloadURL(item).then((url) => {
          url = url.replace(
            "https://firebasestorage.googleapis.com/v0/b/lovebylaysha-be39b.appspot.com",
            `${process.env.REACT_APP_IMAGEKIT}/tr:w-250,h-250,dpr-2`
          );
          setImageUrl((prev) => [...prev, url]);
          setTimeout(() => {
            setLoading(false);
          }, 400);
        })
      );
    });
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setOnNailComp(true);
  }, [logIn]);

  return (
    <div>
      <div
        className={
          localStorage.getItem("token")
            ? "hidden"
            : "w-full flex justify-end pr-6 py-4 pb-0"
        }
      >
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

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

      {loading ? (
        <Loading />
      ) : (
        <div>
          <NailImages
            handleDeleteImage={handleDeleteImage}
            imageUrl={imageUrl}
            token={token}
            removeImage={removeImage}
            setRemoveImage={setRemoveImage}
          />
        </div>
      )}
      {localStorage.getItem("token") && (
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
