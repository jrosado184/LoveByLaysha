import React, { useState, useEffect } from "react";
import { addAppointments } from "../../redux/actions/appointment-actions.js";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ReactComponent as Check } from "./../../assets/checkmark.svg";
import ImageUploadInput from "./ImageUploadInput";

const BookFileUpload = ({ info, dispatch, setInfo, formValid }) => {
  const [image, setImage] = useState(null);

  const nav = useNavigate();

  const handleImage = () => {
    if (image === null) return;
    const imageRef = ref(storage, `clientUploads/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setInfo({ ...info, images: url });
      });
    });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axiosWithAuth().post("/api/appointments", info);
      dispatch(addAppointments(res.data));
      nav("/loading-confirm");
    } catch (err) {
      console.log(err.response.message);
    }
  };
  useEffect(() => {
    handleImage();
  }, [image]);

  return (
    <div>
      <label className=' my-6 flex flex-col shrink md:ml-6 text-pink-900 dark:text-neutral-100'>
        Have a specific set in mind?
        <ImageUploadInput setImage={setImage} />
        {image && (
          <div className='w-full flex gap-2 py-1'>
            <p className='text-pink-900 dark:text-green-500'>
              Image Successfully Uploaded!
            </p>
          </div>
        )}
      </label>
      <input
        data-testid='bookbtn'
        className={
          info.appointment_day &&
          info.appointment_time &&
          info.client_name &&
          info.client_phone &&
          (info.client_set !== "none" || info.refillSet !== "none")
            ? "w-24 h-8 my-3 flex justify-center items-center border-2 border-rose-300 bg-pink-100 ml-[30%] text-rose-500 rounded-full sm2:ml-[70%] md:ml-[75%] lg:ml-[63%] dark:bg-neutral-700 dark:border-neutral-900 dark:text-neutral-100"
            : "opacity-90 w-24 h-8 my-3 flex justify-center items-center border-2 border-rose-300 text-rose-400 ml-[30%] rounded-full sm2:ml-[70%] md:ml-[75%] lg:ml-[63%] dark:bg-neutral-500 dark:border-neutral-900 dark:text-neutral-100"
        }
        type='submit'
        value='Book'
        onClick={formValid(handleSubmit)}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    addAppointments: state.appointments.addAppointments,
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(BookFileUpload);
