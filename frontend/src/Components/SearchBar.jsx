import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setShowbar } from "../Store/States";
import { assets } from "../assets/assets";

function SearchBar() {
  const { showbar } = useSelector((store) => store.states);

  const dispatch = useDispatch();
  return showbar ? (
    <div className="border-b border-t bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className=" flex-1 outline-none bg-inherit text-sm"
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline cursor-pointer w-4"
        alt=""
        onClick={() => dispatch(setShowbar(false))}
      />
    </div>
  ) : null;
}

export default SearchBar;
