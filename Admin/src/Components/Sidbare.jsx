import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
function Sidbare() {
  return (
    <div className="sidebar w-[22%] hidden md:block  border-r-2 border-l-2 border-gray-400 min-h-screen  ">
      <ul className="sidebarOptions pl-[20%] pt-14 pr-2  flex gap-5 flex-col  ">
        <NavLink
          to={"/add"}
          className="sidebarOneOp flex gap-2 border border-gray-300 rounded-lg px-2 py-1 cursor-pointer hover:bg-orange-400 font-semibold "
        >
          <img src={assets.add_icon} alt="" />
          <span>add item</span>
        </NavLink>
        <NavLink
          to={"/list"}
          className="sidebarOneOp flex gap-2 border border-gray-300 rounded-lg px-2 py-1 cursor-pointer hover:bg-orange-40  font-semibold"
        >
          <img src={assets.order_icon} alt="" />
          <span>list items</span>
        </NavLink>
        <NavLink
          to={"/orders"}
          className="sidebarOneOp flex gap-2 border border-gray-300 rounded-lg px-2 py-1 cursor-pointer hover:bg-orange-400 font-semibold"
        >
          <img src={assets.order_icon} alt="" />
          <span>Orders</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidbare;
