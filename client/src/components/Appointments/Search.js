import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../assets/search.svg";

const Search = () => {
  const nav = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  const handleRemoved = () => {
    nav("/deleted");
  };
  const handleCompleted = () => {
    nav("/completed");
  };

  return (
    <div>
      <div className="flex w-full items-center">
        <div
          className={
            !showSearch
              ? "w-22 h-7 border-2 border-pink-200 rounded-full flex items-center ml-4 pl-2 pr-2"
              : "hidden"
          }
        >
          <p onClick={handleCompleted} className="text-sm">
            Completed
          </p>
        </div>
        <div
          className={
            !showSearch
              ? "w-22 h-7 border-2 border-pink-200 rounded-full flex items-center ml-2 pl-2 pr-2"
              : "hidden"
          }
        >
          <p onClick={handleRemoved} className="text-sm">
            Removed
          </p>
        </div>
        <form className="h-8 flex items-center justify-end w-full my-2">
          <input
            className={
              showSearch
                ? "w-[100%] ml-2 border-2 border-pink-300 mr-2 h-9 pl-3 rounded-full"
                : "hidden"
            }
            placeholder="Search for a client"
          />
          <img
            onClick={() => setShowSearch(!showSearch)}
            className="w-6 mr-4"
            src={search}
            alt=""
          />
        </form>
      </div>
    </div>
  );
};

export default Search;