import React from "react";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setcartCount, setcartItems } from "../Store/States";
import axios from "axios";
function Fooditem({ data }) {
  const { _id, name, image, price, description, category } = data;
  const dispatch = useDispatch();
  const { token, cartCount, cartItems } = useSelector((store) => store.states);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = async (itemId) => {
    if (token) {
      setItemCount((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success("added to cart");
      dispatch(setcartCount(itemCount[itemId]));
      try {
        const res = await axios.post(
          `http://localhost:5000/api/cart/add`,
          { itemId: itemId },
          { headers: { token: token } }
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.dark("login plz");
    }
  };
  const removeFromCart = async (itemId) => {
    setItemCount((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    try {
      await axios.post(
        `http://localhost:5000/api/cart/remove`,
        { itemId: itemId },
        { headers: { token: token } }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const loadCartData = async (token) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/cart/get`,
        {},
        { headers: { token: token } }
      );
      setItemCount(res.data.data);
      dispatch(setcartItems(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadCartData(token);
  }, [token, itemCount]);
  return (
    <div className="flex  flex-col gap-2 animate-fade  hover:bg-gray-100 hover:shadow-none shadow-md ease-in-out duration-100 p-2 rounded-md cursor-pointer ">
      <div className="relative">
        <img
          src={`http://localhost:5000/images/${image}`}
          alt={name}
          className="rounded-t-lg w-full object-cover "
        />

        {!itemCount[_id] ? (
          <img
            onClick={() => {
              addToCart(_id);
            }}
            src={assets.add_icon_white}
            alt=""
            className="ring ring-orange-500  mt-2 rounded-full absolute right-2 bottom-2 "
          />
        ) : (
          <div className="flex items-center p-2 gap-4 mt-2 absolute right-2 bottom-2 bg-white rounded-full">
            <button
              onClick={() => {
                addToCart(_id);
              }}
            >
              <img src={assets.add_icon_green} alt="" />
            </button>
            <span className="font-bold text-orange-600 text-lg">
              {itemCount[_id]}
            </span>
            <button
              onClick={() => {
                removeFromCart(_id);
              }}
            >
              <img src={assets.remove_icon_red} alt="" />
            </button>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between ">
        <h3 className="font-bold ">{name}</h3>{" "}
        <span>
          <img src={assets.rating_starts} alt="" className="w-full h-4" />
        </span>
      </div>
      <p className="text-md text-gray-600">{description}</p>
      <p className="text-orange-600">${price}</p>
      <p
        className="text-fuchsia-600 
      font-semibold"
      >
        {category}
      </p>
    </div>
  );
}

export default Fooditem;
