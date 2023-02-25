import React, { useState, useEffect } from "react";
import { postAppointments } from "../../redux/actions/appointment-actions.js";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ImageUploadInput from "../Appointments/modals/ImageUploadInput";
import Loading from "./../Appointments/pages/Loading.js";

const BookFileUpload = ({ info, dispatch, setInfo, formValid }) => {
  const nav = useNavigate();

  const [image, setImage] = useState(null);

  const [policyAgreement, setPolicyAgreement] = useState(false);

  const handleSubmit = () => {
    policyAgreement && dispatch(postAppointments(info));
    nav("/loading-confirm");
  };

  useEffect(() => {
    if (image === null) return;
    const imageRef = ref(storage, `clientUploads/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setInfo({ ...info, images: url });
      });
    });
  }, [image]);

  return (
    <div>
      <label className=' my-6 flex flex-col shrink md:ml-6 text-pink-900 dark:text-neutral-100'>
        Have a specific set in mind?
        <ImageUploadInput setImage={setImage} />
        {image && (
          <div className='w-full flex gap-2 py-1'>
            <p className='text-pink-900 dark:text-green-500'>
              {info.images ? (
                `Image Successfully Uploaded!`
              ) : (
                <Loading height={"2vh"} />
              )}
            </p>
          </div>
        )}
      </label>
      <input
        className='ml-6'
        type='checkbox'
        name='policyAgreement'
        value={policyAgreement}
        onChange={() => setPolicyAgreement((prevValue) => !prevValue)}
      />
      <label className='ml-2 text-pink-900 dark:text-neutral-100'>
        I have read and agree to all policies
      </label>
      <div className='flex justify-center w-[100%] my-2'>
        <input
          disabled={image && !info.images}
          className='w-20 my-6 text-md border border-pink-500 text-pink-900 bg-pink-200 rounded-full dark:bg-neutral-900 dark:border-neutral-600 dark:text-neutral-100'
          data-testid='bookbtn'
          type='submit'
          value='Book'
          onClick={formValid(handleSubmit)}
        />
      </div>
      <button
        onClick={() => nav("/reschedule")}
        className='w-full my-[0.2%] flex justify-center underline text-pink-900 dark:text-neutral-100'
      >
        reschedule or cancel?
      </button>
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
