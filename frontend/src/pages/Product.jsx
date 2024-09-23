import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, products } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/States";
function Product() {
  const [productData, setdata] = useState(false);
  const [img, setimg] = useState("");
  const { productId } = useParams();
  const dispatch = useDispatch();
  // Fetch product data using product
  const fetchProductDate = (productId) => {
    const data = products.find((item) => item._id === productId);
    setdata(data);
    data && setimg(data.image[0]);
  };
  useEffect(() => {
    fetchProductDate(productId);
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data*/}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* col of product imgs */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img) => (
              <img
                onClick={() => setimg(img)}
                key={img}
                src={img}
                alt={productData.title}
                className=" w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]   ">
            <img src={img} alt={productData.title} className="w-full h-auto" />
          </div>
        </div>
        {/* col of product details */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <h1 className="font-bold text-2xl">{productData.name}</h1>
          <div className="flex gap-1 items-center">
            {" "}
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-3">(122) </p>
          </div>
          <p className="text-gray-600">{productData.description}</p>
          <div>
            <p className="text-gray-700 text-3xl">
              <span className="font-bold ">Price:</span> ${productData.price}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Category:</span>{" "}
              {productData.category}
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="capitalize text-lg font-semibold ">select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  className={`text-gray-800 text-sm font-semibold  ${
                    size === productData.selectedSize
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 bg-gray-200"
                  } px-4 py-2 rounded-md `}
                  onClick={() => {
                    setdata({ ...productData, selectedSize: size });
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: productData._id,
                  size: productData.selectedSize,
                  quantity: 1,
                })
              )
            }
            className="uppercase bg-black active:bg-gray-700 text-white px-8 py-2 rounded-md"
          >
            Add to Cart
          </button>
          <hr className="mt8 bg-slate-600 " />
          <div className="text-sm text-gray-400">
            <p>100% Original.</p>

            <p>Free shipping on orders over $99.</p>
            <p> easy return or exchange within 7days .</p>
          </div>
        </div>
      </div>
      {/* reviews & description  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 border text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            vero, excepturi eius, nostrum enim accusantium vel, ex recusandae
            praesentium aspernatur reprehenderit eaque aperiam! Maiores suscipit
            saepe numquam! Quia, exercitationem explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            ea eos eligendi ab voluptates eius soluta ipsam magni in laboriosam,
            nihil dicta quisquam et cumque, exercitationem itaque amet maiores
            quibusdam.
          </p>
        </div>
      </div>
      {/* related product */}
      <RelatedProducts
        Category={productData.category}
        SubCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className=""> </div>
  );
}

export default Product;
