import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { connect } from "react-redux";
import { getAppointments } from "./../../redux/actions/appointment-actions";

const Search = ({
  dispatch,
  fetchAppointments,
  searchingForClient,
  setSearchingForClient,
  searchInput,
  setSearchInput,
}) => {
  const nav = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  const handleCompleted = () => {
    nav("/completedAppointments");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const onSearchClick = () => {
    setShowSearch(!showSearch);
    showSearch && setSearchingForClient(false);
    showSearch && setSearchInput("");
  };

  useEffect(() => {
    dispatch(getAppointments());
    searchInput && setSearchingForClient(true);
  }, [showSearch, searchInput]);

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className='h-8 flex items-center justify-end w-full my-2'
        >
          <input
            onClick={handleSearch}
            className={
              showSearch
                ? "w-[100%] ml-2 border-2 border-pink-300 mr-2 h-9 pl-3 rounded-full text-pink-900 dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-900"
                : "hidden"
            }
            placeholder='Search for a client'
            name='searchInput'
            value={searchInput}
            onChange={handleSearch}
          />
          <SearchIcon
            onClick={onSearchClick}
            className='w-6 mr-4 cursor-pointer text-pink-900 flex-shrink-0 dark:text-neutral-100'
          />
        </form>
      </div>
      <hr className='bg-pink-300 dark:bg-neutral-800' />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Search);
