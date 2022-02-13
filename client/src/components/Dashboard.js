import React from "react";
import right from "../assets/right.svg";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col my-1 gap-8">
      <div className="w-[95%] h-24 border-2 border-gray-300 rounded-md flex flex-col shadow-md">
        <div className="w-full flex justify-between">
          <div className="h-fit">
            <h1 className="ml-4 py-1 font-semibold">Laysha Serrano</h1>
          </div>
          <p className="mr-4 py-1">2/17/2022</p>
        </div>
        <div className="w-full ml-4 my-2 flex justify-between">
          <p>10:00 AM</p>
          <button className="mr-8 my-4">
            <div className="flex gap-2 items-center w-full h-100">
              <p>See Information</p>
              <button>
                <img className="w-4" src={right} />
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
