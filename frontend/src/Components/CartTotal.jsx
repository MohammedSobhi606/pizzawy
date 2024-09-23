import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { food_list, products } from "../assets/assets";
import Title from "../Components/Title";
import { calTotalPrice } from "../Store/States";
function CartTotal() {
  const dispatch = useDispatch();
  const { totalPrice, cartCount, foodList } = useSelector(
    (store) => store.states
  );
  useEffect(() => {
    dispatch(calTotalPrice(foodList));
  }, [cartCount]);
  return (
    <div className="w-full">
      <div className="text-2xl ">
        <Title text1={"cart"} text2={"total"} />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="text-gray-700 text-2xl">${totalPrice.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipping</p>
          <p className="text-gray-700 text-2xl">Free</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-gray-800 font-bold ">Total</p>
          <p className="text-gray-700 text-2xl">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
