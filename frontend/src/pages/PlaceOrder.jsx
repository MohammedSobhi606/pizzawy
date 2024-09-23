import React from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function PlaceOrder() {
  const [itemselected, setItemselected] = useState(0);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",

    country: "",
    phone: "",
    address: "",
  });
  const onChangeHa = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({ ...data, [name]: value });
  };
  const placeOrder = async () => {
    // validate inputs
    if (
      !data.firstName ||
      !data.lastName ||
      !data.address ||
      !data.country ||
      !data.phone
    ) {
      toast.warning("Please fill all the required fields");
      return;
    }
    // place order
    let orders = [];

    // navigate to success page
    navigate("/success");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* =====Left side ========= */}

      <div className=" flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl mt-3">
          <Title text1={"delivery"} text2={"information"} />
        </div>
        {/* inputs */}
        <div className="flex gap-3">
          <input
            type="text"
            name="firstName"
            onChange={onChangeHa}
            placeholder="First name"
            value={data.firstName}
            className="border-2 p-2 w-full border-gray-300 outline-none focus:ring-1 ring-blue-500  rounded"
          />
          <input
            type="text"
            onChange={onChangeHa}
            placeholder="Last name"
            name="lastName"
            value={data.lastName}
            className="border-2 p-2 w-full  border-gray-300 outline-none focus:ring-1 ring-blue-500 rounded"
          />
        </div>
        <input
          type="text"
          onChange={onChangeHa}
          placeholder="address "
          name="address"
          value={data.address}
          className="border-2 p-2 w-full rounded  border-gray-300 outline-none focus:ring-1 ring-blue-500 "
        />

        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={onChangeHa}
          value={data.country}
          className="border-2 p-2 w-full  border-gray-300 outline-none focus:ring-1 ring-blue-500 rounded"
        />

        <input
          type="number"
          placeholder="phone"
          name="phone"
          onChange={onChangeHa}
          value={data.phone}
          className="border-2 p-2 w-full rounded  border-gray-300 outline-none focus:ring-1 ring-blue-300 "
        />
      </div>
      {/* =====right side ========= */}
      <div className="mt-8 ">
        <div className="min-w-70">
          <CartTotal />
        </div>
        <div className="mt-12 ">
          <Title text1={"payment"} text2={"method"} />
        </div>
        {/* payment methods */}
        <div className="flex flex-col lg:flex-row gap-3">
          <div
            onClick={() => setItemselected(1)}
            className="flex items-center gap-3 cursor-pointer border px-3 py-2"
          >
            <span
              className={`rounded-full h-3.5 min-w-3.5 border ${
                itemselected === 1 ? "bg-green-500" : ""
              }`}
            ></span>
            <img src={assets.stripe_logo} alt="" className="mx-5 h-5" />
          </div>
          <div
            onClick={() => setItemselected(2)}
            className="flex items-center gap-3 cursor-pointer border px-3 py-2"
          >
            <span
              className={`rounded-full h-3.5 min-w-3.5 border ${
                itemselected === 2 ? "bg-green-500" : ""
              }`}
            ></span>
            <img src={assets.razorpay_logo} alt="" className="mx-5 h-5 " />
          </div>
          <div className="flex items-center gap-3 cursor-pointer border px-3 py-2">
            <span
              className={`rounded-full h-3.5 min-w-3.5 border ${
                itemselected === 0 ? "bg-green-500" : ""
              }`}
            ></span>
            <p className="text-gray-600 font-bold">Cash On Delivery</p>
          </div>
        </div>{" "}
        <div className=" mt-4  w-full text-end ">
          <button
            onClick={() => navigate("/orders")}
            className=" bg-black text-white py-2 px-12 uppercase mt-8   font-bold rounded-sm "
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
