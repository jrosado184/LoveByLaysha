import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Search = () => {
  const nav = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  const [searchInput, setSearchInput] = useState("");

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
              ? "target:bg-red-500 w-22 h-7 border-2 border-pink-200 rounded-full flex items-center ml-4 pl-2 pr-2 cursor-pointer dark:bg-neutral-700 dark:border-neutral-900"
              : "hidden"
          }
        >
          <p className='text-sm text-pink-900 dark:text-neutral-100'>
            Completed
          </p>
        </div>
        <form className='h-8 flex items-center justify-end w-full my-2'>
          <input
            onClick={handleSearch}
            className={
              showSearch
                ? "w-[100%] ml-2 border-2 border-pink-300 mr-2 h-9 pl-3 rounded-full dark:bg-neutral-700 dark:border-neutral-900"
                : "hidden"
            }
            placeholder='Search for a client'
          />
          <SearchIcon
            onClick={() => setShowSearch(!showSearch)}
            className='w-6 mr-4 cursor-pointer text-pink-900 flex-shrink-0 dark:text-neutral-100'
          />
        </form>
      </div>
      <hr className='bg-pink-300 dark:bg-neutral-800' />
    </div>
  );
};

export default Search;
