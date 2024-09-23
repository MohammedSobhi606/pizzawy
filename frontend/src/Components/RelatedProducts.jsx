import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import { products } from "../assets/assets";
import ProductItem from "./ProductItem";
function RelatedProducts({ Category, SubCategory }) {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    const copy = [...products];
    const relatedProducts = copy.filter(
      (product) =>
        product.category === Category && product.subCategory === SubCategory
    );

    setRelated(relatedProducts);
  }, [Category, SubCategory]);
  return (
    <div className="my-24 ">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      {/* related products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-4">
        {related.map((product, i) => (
          <ProductItem product={product} key={i} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
