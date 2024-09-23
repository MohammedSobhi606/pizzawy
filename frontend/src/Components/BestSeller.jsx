import React from "react";
import { useState, useEffect } from "react";
import { products } from "../assets/assets";
import Title from "./Title";

import ProductItem from "./ProductItem";
function BestSeller() {
  const [BestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestSeller = products
      .filter((product) => product.bestseller === true)
      .slice(0, 12);
    setBestSeller(bestSeller);
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="text-sm text-gray-600"></p>
      </div>
      {/* Best products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-4">
        {BestSeller.map((product, i) => (
          <ProductItem product={product} key={i} />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
