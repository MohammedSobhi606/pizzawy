import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import { removeFromCart, updateQuantity } from "../Store/States";
import CartTotal from "../Components/CartTotal";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, cartCount, foodList } = useSelector(
    (store) => store.states
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="pt-14 border-t">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {/* cart items */}

      {foodList.map((product, ix) => {
        if (cartItems[product._id] >= 0) {
          return (
            <div
              key={ix}
              className="py-4 border-b border-t text-gray-700 grid grid-cols-[4fr_0.5fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20 object-cover rounded-md"
                  src={`http://localhost:5000/images/${product.image}`}
                />
                <div>
                  <h3 className="text-sm sm:text-xl font-medium">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-5 mt-2">
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
              <label className="text-xl font-bold">
                T:$
                {product.price * cartItems[product._id]}
              </label>
              <label className="text-xl font-bold">
                {" "}
                Q:
                <input
                  type="number"
                  min={1}
                  defaultValue={cartItems[product._id]}
                  className="border text-lg font-medium max-w-10 px-1 sm:max-w-20 sm:px-2 py-1 rounded-md  outline-none   focus:ring-1 focus:ring-indigo-400 "
                />
              </label>
            </div>
          );
        }
      })}

      <div className="flex justify-end my-20 ">
        <div className=" w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place_order")}
              className="py-2 px-4 my-8 bg-orange-700 text-white rounded-sm shadow-lg shadow-black -translate-y-1 ease-in-out duration-100 active:shadow-sm active:translate-y-0"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
