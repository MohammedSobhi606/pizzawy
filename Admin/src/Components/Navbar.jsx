import React from "react";
import { assets } from "../assets/assets";
function Navbar() {
  return (
    <div className="flex justify-between items-center mt-1 px-2 py-3">
      <div className="logo cursor-pointer  w-20 md:w-32  ">
        {" "}
        <img src={assets.logo} alt="" />
      </div>
      <div className="profile  cursor-pointer  w-12">
        <img src={assets.profile_image} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
