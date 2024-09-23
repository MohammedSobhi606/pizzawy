import axios from "axios";
import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
function ListFood({ url }) {
  const [foodlist, setFoodlist] = useState([]);

  // fetch food list from API
  const GetData = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list `);
      setFoodlist(response.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  // remove food item from API
  const removeFood = async (id) => {
    try {
      await axios.delete(`${url}/api/food/del/${id}`);
      toast.success("Food removed successfully");
      GetData();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="List w-full">
      <h1>Food List</h1>
      <div className="">
        <div className="bg-orange-500 grid grid-cols-[0.5fr_.5fr_.5fr]    md:grid-cols-[0.5fr_1fr_1fr_0.5fr_1.5fr]  justify-between  items-center gap-3 text-xl font-semibold rounded-t-lg p-2  ">
          <p>image</p>
          <p>Name</p>
          <p className=" hidden md:block ">Category </p>

          <p className=" hidden md:block ">Price</p>
          <p>actions</p>
        </div>
        {foodlist.map((food, inx) => (
          <div
            className=" grid grid-cols-[0.5fr_.5fr_.5fr]   md:grid-cols-[0.5fr_1fr_1fr_0.5fr_1.5fr]  gap-3  justify-between border-separate border-b-2 items-center "
            key={inx}
          >
            <img src={`${url}/images/${food.image}`} alt="" />
            <p className="font-bold">{food.name}</p>
            <p className="text-lg text-gray-600  hidden md:block  ">
              {food.category}
            </p>

            <p className="text-lg text-gray-600 hidden md:block  ">
              {food.price}
            </p>
            <div className="flex gap-3 ">
              <button className="px-3 py-2 active:scale-90 transition-all rounded-lg bg-blue-500 font-bold text-white">
                Edit
              </button>
              <button
                onClick={() => removeFood(food._id)}
                className="px-3 py-2 active:scale-90 transition-all rounded-lg bg-red-500 font-bold text-white "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListFood;
