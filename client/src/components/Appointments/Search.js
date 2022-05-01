import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../assets/search.svg";

const Search = () => {
  const nav = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const handleRemoved = () => {
    nav("/deleted");
  };
  const handleCompleted = () => {
    nav("/completedAppointments");
  };

  const handleSearch = () => {};

  return (
    <div>
      <div className='flex w-full items-center'>
        <div
          onClick={handleCompleted}
          className={
            !showSearch
              ? "target:bg-red-500 w-22 h-7 border-2 border-pink-200 rounded-full flex items-center ml-4 pl-2 pr-2 cursor-pointer"
              : "hidden"
          }
        >
          <p className='text-sm'>Completed</p>
        </div>
        <div
          className={
            !showSearch
              ? "w-22 h-7 border-2 border-pink-200 rounded-full flex items-center ml-2 pl-2 pr-2"
              : "hidden"
          }
        >
          <p onClick={handleRemoved} className='text-sm cursor-pointer'>
            Removed
          </p>
        </div>
        <form className='h-8 flex items-center justify-end w-full my-2'>
          <input
            value={searchInput}
            onClick={handleSearch}
            className={
              showSearch
                ? "w-[100%] ml-2 border-2 border-pink-300 mr-2 h-9 pl-3 rounded-full"
                : "hidden"
            }
            placeholder='Search for a client'
          />
          <img
            onClick={() => setShowSearch(!showSearch)}
            className='w-6 mr-4 cursor-pointer'
            src={search}
            alt=''
          />
        </form>
      </div>
      <hr className='bg-pink-300' />
    </div>
  );
};

export default Search;
