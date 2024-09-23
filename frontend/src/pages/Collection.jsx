import React from "react";
import { assets, products } from "../assets/assets";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../Components/ProductItem";
import Title from "../Components/Title";
function Collection() {
  const [ShowFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setsortType] = useState("relevant");
  const { searchvalue } = useSelector((store) => store.states);
  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (SubCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let copyProduct = products.slice();
    if (searchvalue.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        item.name.toLowerCase().includes(searchvalue.toLowerCase())
      );
    }
    if (Category.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        Category.includes(item.category)
      );
    }
    if (SubCategory.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        SubCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(copyProduct);
  };

  const sortProduct = (type) => {
    let sortedProduct = filterProduct.slice();
    switch (type) {
      case "price_low_to_high":
        setFilterProduct(sortedProduct.sort((a, b) => a.price - b.price));
        break;
      case "price_high_to_low":
        setFilterProduct(sortedProduct.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [Category, SubCategory, searchvalue]);
  useEffect(() => {
    sortProduct(sortType);
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!ShowFilter)}
          className=" uppercase flex items-center gap-3 text-xl my-2 cursor-pointer"
        >
          filters
          <img
            src={assets.dropdown_icon}
            className={`w-2 sm:hidden ${ShowFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            ShowFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase text-sm font-medium mb-3">categories</p>
          <div className="text-gray-700 flex flex-col gap-2 text-md font-light ">
            <label className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                name=""
                id=""
                value={"Men"}
                className="w-4 accent-pink-300"
              />
              Men
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                name=""
                id=""
                value={"Women"}
                className="w-4 accent-pink-300"
              />
              Women
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                name=""
                id=""
                value={"Kids"}
                className="w-4 accent-pink-300"
              />
              Kids
            </label>
          </div>
        </div>
        {/* Sub Category  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            ShowFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase text-sm font-medium mb-3">type</p>
          <div className="text-gray-700 flex flex-col gap-2 text-md font-light ">
            <label className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                name=""
                id=""
                value={"Topwear"}
                className="w-4 accent-pink-300"
              />
              Top wear
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                name=""
                id=""
                value={"Bottomwear"}
                className="w-4 accent-pink-300"
              />
              bottom wear
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                name=""
                id=""
                value={"Winterwear"}
                className="w-4 accent-pink-300"
              />
              Winter wear
            </label>
          </div>
        </div>
      </div>
      {/* collection list */}
      <div className=" flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select
            onChange={(e) => setsortType(e.target.value)}
            className="px-2 border-2 text-sm border-gray-300"
          >
            <option value="relevant">relevant</option>
            <option value="price_high_to_low">Price (high to low)</option>
            <option value="price_low_to_high">Price (low to high)</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-4">
          {filterProduct.map((product, i) => (
            <ProductItem product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
