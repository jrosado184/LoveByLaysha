import React from "react";
import check from "./../assets/check.svg";

const Confirm = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <h1 className="text-3xl text-center my-6 font-girl">
        Thank you for booking!
      </h1>
      <img
        className="w-12 border-2 border-green-500 rounded-full"
        src={check}
        alt=""
      />
      <p className="font-semibold">your appointment is confirmed:</p>
    </div>
  );
};

export default Confirm;
