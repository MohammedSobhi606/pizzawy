import React from "react";
import { menu_list } from "../assets/assets";
import Title from "./Title";

import ProductItem from "./ProductItem";
function LatestCollection({ category, setCategory }) {
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"explore our"} text2={"menus"} />
        <p className="text-sm text-gray-600">
          Discover our latest additions to our menu.
        </p>
      </div>
      {/* latest products */}
      <div className="flex  gap-8 overflow-x-scroll sm:flex-row justify-between items-center">
        {menu_list.map((menu, i) => (
          <ProductItem
            menu_name={menu.menu_name}
            menu_image={menu.menu_image}
            key={i}
            category={category}
            setCategory={setCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
