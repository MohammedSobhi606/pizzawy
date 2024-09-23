import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ menu_image, menu_name, category, setCategory }) {
  return (
    <div
      onClick={() => {
        setCategory((prev) => (prev === menu_name ? "all" : menu_name));
      }}
      className="flex flex-col gap-2  items-center shrink-0 cursor-pointer"
    >
      <div>
        <div
          className={`${
            category === menu_name ? "ring-4  ring-orange-600" : ""
          } rounded-full`}
        >
          <img src={menu_image} />
        </div>
      </div>
      <p className="text-sm pt-3 pb-1 line-clamp-1 ">{menu_name}</p>
      <p className="text-gray-500 text-sm font-medium"></p>
    </div>
  );
}

export default ProductItem;
